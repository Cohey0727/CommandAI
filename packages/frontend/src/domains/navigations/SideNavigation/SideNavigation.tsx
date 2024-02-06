import { Component } from "solid-js";
import { RiEditorListOrdered, RiLogosWechatPayLine } from "solid-icons/ri";
import { Avatar, Center, Col, List, ListItem } from "src/components";
import styles from "./SideNavigation.module.css";

type SideNavigationProps = {};

const SideNavigation: Component<SideNavigationProps> = (props) => {
  return (
    <Col class={styles.root}>
      <Center class={styles.avatarContainer}>
        <Avatar src="SolidJS" size="xl" />
      </Center>
      <List>
        <ListItem class={styles.menuItem} href="chats" mode="link" icon={<RiLogosWechatPayLine />}>
          Chat
        </ListItem>
        <ListItem
          class={styles.menuItem}
          href="chats/histories"
          mode="link"
          icon={<RiEditorListOrdered />}
        >
          History
        </ListItem>
      </List>
    </Col>
  );
};

export type { SideNavigationProps };
export default SideNavigation;
