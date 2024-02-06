import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Col, Row, TextArea } from "src/components";
import styles from "./ChatsChatId.module.css";

const ChatsChatId: Component<RouteSectionProps> = (props) => {
  return (
    <Col class={styles.root}>
      <h1>Chat {props.params.chatId}</h1>
      <Row class={styles.inputContainer}>
        <TextArea class={styles.input} maxRows={10} />
      </Row>
    </Col>
  );
};

export default ChatsChatId;
