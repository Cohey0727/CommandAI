import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./TextInput.module.css";

type BaseProps = JSX.IntrinsicElements["input"];
type OwnProps = {};
type TextInputProps = BaseProps & OwnProps;

const TextInput: Component<TextInputProps> = (props) => {
  const { class: className, ...rest } = props;
  return <input {...rest} class={clsx(styles.root, className)} />;
};

export type { TextInputProps };
export default TextInput;
