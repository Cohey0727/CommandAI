import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Col.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["div"];
type OwnProps = {};
type ColProps = Merge<BaseProps, OwnProps>;

const Col: Component<ColProps> = (props) => {
  const { class: className, ...rest } = props;
  return <div {...rest} class={clsx(styles.root, className)} />;
};

export type { ColProps };
export default Col;
