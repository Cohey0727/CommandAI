import { splitProps, type Component, type JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Center.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["div"];
type OwnProps = {};
type CenterProps = Merge<BaseProps, OwnProps>;

const Center: Component<CenterProps> = (props) => {
  const [ownProps, childProps] = splitProps(props, ["class"]);
  return <div {...childProps} class={clsx(styles.root, ownProps.class)} />;
};

export type { CenterProps };
export default Center;
