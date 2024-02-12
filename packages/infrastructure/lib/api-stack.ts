import * as cdk from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigatewayv2";
import * as lambda from "aws-cdk-lib/aws-lambda";

type ApiStackProps = {};

class ApiStack {
  readonly api: apigateway.CfnApi;
  readonly func: lambda.DockerImageFunction;

  constructor(scope: cdk.Stack, props?: ApiStackProps) {
    const backendRemotePath = `../backend`;
    this.func = new lambda.DockerImageFunction(scope, `CommandApi`, {
      functionName: `${scope.stackName}-api`,
      code: lambda.DockerImageCode.fromImageAsset(backendRemotePath),
      timeout: cdk.Duration.seconds(15),
      memorySize: 128,
      environment: {
        HELLO: `LAMBDA`,
      },
      architecture: lambda.Architecture.ARM_64,
    });

    this.api = new apigateway.CfnApi(scope, `CommandAIApiGateway`, {
      name: `${scope.stackName}-api`,
      protocolType: `HTTP`,
      corsConfiguration: {
        allowOrigins: [`*`],
        allowMethods: [`GET`, `POST`, `OPTIONS`],
        allowHeaders: [`*`],
      },
    });

    const stage = new apigateway.CfnStage(scope, `CommandAIApiGatewayStage`, {
      apiId: this.api.attrApiId,
      stageName: `$default`,
      autoDeploy: true,
    });

    new lambda.CfnPermission(scope, `CommandAIApiGatewayPermission`, {
      functionName: this.func.functionName,
      action: `lambda:InvokeFunction`,
      principal: `apigateway.amazonaws.com`,
      sourceArn: `arn:aws:execute-api:${scope.region}:${scope.account}:${this.api.attrApiId}/*/*`,
    });

    new lambda.EventInvokeConfig(scope, `EventInvokeConfig`, {
      function: this.func,
      qualifier: `$LATEST`,
      retryAttempts: 0,
    });

    const integration = new apigateway.CfnIntegration(
      scope,
      `CommandAIApiGatewayIntegration`,
      {
        apiId: this.api.attrApiId,
        integrationType: `AWS_PROXY`,
        integrationUri: this.func.functionArn,
        payloadFormatVersion: `2.0`,
      }
    );
    const httpMethods = [`POST`, `GET`];

    httpMethods.forEach((method) => {
      new apigateway.CfnRoute(scope, `CommandAIApiGatewayRoute-${method}`, {
        apiId: this.api.attrApiId,
        routeKey: `${method} /`,
        authorizationType: `NONE`,
        target: `integrations/${integration.ref}`,
      });
    });
  }
}

export default ApiStack;
