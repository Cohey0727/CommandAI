import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./List.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["ul"];
type OwnProps = {};
type ListProps = Merge<BaseProps, OwnProps>;

const List: Component<ListProps> = (props) => {
  const { class: className, ...rest } = props;
  return <ul {...rest} class={clsx(styles.root, className)} />;
};

export type { ListProps };
export default List;
