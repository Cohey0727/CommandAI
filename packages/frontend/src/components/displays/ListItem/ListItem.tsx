import { A } from "@solidjs/router";
import { splitProps, type Component, type JSX, type JSXElement } from "solid-js";
import clsx from "clsx";
import { Merge } from "src/utils/types";
import { Button, Wrapping } from "src/components";
import styles from "./ListItem.module.css";

type BaseProps = JSX.IntrinsicElements["li"];
type Mode = "default" | "button" | "link";

type CommonProps = {
  icon?: JSX.Element;
  children: JSX.Element;
};

type DefaultProps = {
  mode?: "default" | undefined;
} & CommonProps;

type ButtonProps = {
  mode: "button";
  onClick: () => void;
} & CommonProps;

type LinkProps = {
  mode: "link";
  href: string;
} & CommonProps;

type OwnProps = DefaultProps | ButtonProps | LinkProps;

type ListItemProps<M extends Mode> = Merge<BaseProps, OwnProps>;

function ListItem<M extends Mode = "default">(props: ListItemProps<M>): JSXElement {
  const [ownProps, childProps] = splitProps(props, ["class", "icon", "mode", "children"]);

  const modeStyle = styles[ownProps.mode ?? "default"];
  return (
    <li {...childProps} class={clsx(styles.root, modeStyle, ownProps.class)}>
      <Wrapping
        wrapper={A}
        wrapperProps={{ href: (props as LinkProps).href }}
        when={ownProps.mode === "link"}
      >
        <Wrapping
          wrapper={Button}
          wrapperProps={{ onClick: (props as ButtonProps).onClick }}
          when={ownProps.mode === "button"}
        >
          {ownProps.icon && <div class={styles.icon}>{ownProps.icon}</div>}
          <div class={styles.title}>{ownProps.children}</div>
        </Wrapping>
      </Wrapping>
    </li>
  );
}

export type { ListItemProps };
export default ListItem;
