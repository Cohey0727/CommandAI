import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Col, Row } from "src/components";

const Root: Component<RouteSectionProps> = (props) => {
  const { children } = props;
  return (
    <Row>
      <Col>再度</Col>
      <Col>{children}</Col>
    </Row>
  );
};

export default Root;
