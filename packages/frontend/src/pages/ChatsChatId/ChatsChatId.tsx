import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Col, TextInput } from "src/components";
import styles from "./ChatsChatId.module.css";

const ChatsChatId: Component<RouteSectionProps> = (props) => {
  return (
    <Col class={styles.root}>
      <h1>Chat {props.params.chatId}</h1>
      <TextInput />
    </Col>
  );
};

export default ChatsChatId;
