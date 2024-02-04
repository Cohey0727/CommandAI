import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./ListItem.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["li"];
type OwnProps = {};
type ListItemProps = Merge<BaseProps, OwnProps>;

const ListItem: Component<ListItemProps> = (props) => {
  const { class: className, ...rest } = props;
  return <li {...rest} class={clsx(styles.root, className)} />;
};

export type { ListItemProps };
export default ListItem;
