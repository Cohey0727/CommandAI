import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Row.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["div"];
type OwnProps = {};
type RowProps = Merge<BaseProps, OwnProps>;

const Row: Component<RowProps> = (props) => {
  const { class: className, ...rest } = props;
  return <div {...rest} class={clsx(styles.root, className)} />;
};

export type { RowProps };
export default Row;
