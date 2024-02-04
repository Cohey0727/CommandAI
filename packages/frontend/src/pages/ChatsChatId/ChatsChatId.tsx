import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";

const ChatsChatId: Component<RouteSectionProps> = (props) => {
  const { params } = props;
  const { chatId } = params;
  console.log({ chatId });
  return <>{chatId}</>;
};

export default ChatsChatId;
