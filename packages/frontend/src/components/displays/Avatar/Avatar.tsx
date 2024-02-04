import type { Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Avatar.module.css";
import { Merge } from "src/utils/types";

type BaseProps = JSX.IntrinsicElements["img"];
type OwnProps = {
  src: string;
  alt: string;
  size?: string;
};
type AvatarProps = Merge<BaseProps, OwnProps>;

const Avatar: Component<AvatarProps> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <div class={clsx(styles.root, className)}>
      <img {...rest} />
    </div>
  );
};

export type { AvatarProps };
export default Avatar;
