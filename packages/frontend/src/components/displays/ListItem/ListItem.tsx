import { A } from "@solidjs/router";
import type { Component, JSX, JSXElement } from "solid-js";
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

function ListItem<M extends Mode = "default">(
  props: ListItemProps<M>
): JSXElement {
  const { class: className, icon, mode = "default", children, ...rest } = props;
  const { href } = props as LinkProps;
  const { onClick } = props as ButtonProps;

  const modeStyle = styles[mode];
  return (
    <li {...rest} class={clsx(styles.root, modeStyle, className)}>
      <Wrapping wrapper={A} wrapperProps={{ href }} when={mode === "link"}>
        <Wrapping
          wrapper={Button}
          wrapperProps={{ onClick }}
          when={mode === "button"}
        >
          {icon && <div class={styles.icon}>{icon}</div>}
          <div class={styles.title}>{children}</div>
        </Wrapping>
      </Wrapping>
    </li>
  );
}

export type { ListItemProps };
export default ListItem;
