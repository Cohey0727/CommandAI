import { splitProps, type Component, type JSX } from "solid-js";
import clsx from "clsx";
import styles from "./List.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["ul"];
type OwnProps = {};
type ListProps = Merge<BaseProps, OwnProps>;

const List: Component<ListProps> = (props) => {
  const [ownProps, childProps] = splitProps(props, ["class"]);
  return <ul {...childProps} class={clsx(styles.root, ownProps.class)} />;
};

export type { ListProps };
export default List;
