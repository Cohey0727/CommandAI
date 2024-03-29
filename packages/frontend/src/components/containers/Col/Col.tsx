import { splitProps, type Component, type JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Col.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["div"];
type OwnProps = {};
type ColProps = Merge<BaseProps, OwnProps>;

const Col: Component<ColProps> = (props) => {
  const [ownProps, childProps] = splitProps(props, ["class"]);
  return <div {...childProps} class={clsx(styles.root, ownProps.class)} />;
};

export type { ColProps };
export default Col;
