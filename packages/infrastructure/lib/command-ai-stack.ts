import * as cdk from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigatewayv2";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import ApiStack from "./api-stack";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class CommandAIStack extends cdk.Stack {
  readonly gqlApi: apigateway.CfnApi;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const a = new ApiStack(this);
  }
}

export default CommandAIStack;
