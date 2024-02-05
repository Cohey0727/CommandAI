import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Button.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["button"];
type OwnProps = {};
type ButtonProps = Merge<BaseProps, OwnProps>;

const Button: Component<ButtonProps> = (props) => {
  const { class: className, ...rest } = props;
  return <button {...rest} class={clsx(styles.root, className)} />;
};

export type { ButtonProps };
export default Button;
