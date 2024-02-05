import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Col, Row } from "src/components";
import { SideNavigation } from "src/domains";
import styles from "./Root.module.css";

const Root: Component<RouteSectionProps> = (props) => {
  const { children } = props;
  return (
    <Row class={styles.root}>
      <SideNavigation />
      <main class={styles.main}>{children}</main>
    </Row>
  );
};

export default Root;
