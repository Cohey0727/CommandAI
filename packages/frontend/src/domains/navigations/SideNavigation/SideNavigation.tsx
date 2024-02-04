import { Component } from "solid-js";
import { Col, List, ListItem } from "src/components";
import styles from "./SideNavigation.module.css";

type SideNavigationProps = {};

const SideNavigation: Component<SideNavigationProps> = (props) => {
  return (
    <Col>
      <List class={styles.root}>
        <ListItem>Chat</ListItem>
        <ListItem>History</ListItem>
      </List>
    </Col>
  );
};

export type { SideNavigationProps };
export default SideNavigation;
