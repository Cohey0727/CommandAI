import { splitProps, type Component, type JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Row.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["div"];
type OwnProps = {};
type RowProps = Merge<BaseProps, OwnProps>;

const Row: Component<RowProps> = (props) => {
  const [ownProps, childProps] = splitProps(props, ["class"]);
  return <div {...childProps} class={clsx(styles.root, ownProps.class)} />;
};

export type { RowProps };
export default Row;
