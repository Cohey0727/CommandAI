import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Col, Row } from "src/components";
import { SideNavigation } from "src/domains";

const Root: Component<RouteSectionProps> = (props) => {
  const { children } = props;
  return (
    <Row>
      <SideNavigation />
      <Col>{children}</Col>
    </Row>
  );
};

export default Root;
