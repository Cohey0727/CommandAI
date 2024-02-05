import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Col, TextInput } from "src/components";
import styles from "./ChatsChatId.module.css";

const ChatsChatId: Component<RouteSectionProps> = (props) => {
  const { params } = props;
  const { chatId } = params;
  return (
    <Col class={styles.root}>
      <h1>Chat {chatId}</h1>
      <TextInput />
    </Col>
  );
};

export default ChatsChatId;
