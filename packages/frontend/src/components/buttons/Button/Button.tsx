import { splitProps, type Component, type JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Button.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["button"];
type OwnProps = {};
type ButtonProps = Merge<BaseProps, OwnProps>;

const Button: Component<ButtonProps> = (props) => {
  const [ownProps, childProps] = splitProps(props, ["class"]);
  return <button {...childProps} class={clsx(styles.root, ownProps.class)} />;
};

export type { ButtonProps };
export default Button;
