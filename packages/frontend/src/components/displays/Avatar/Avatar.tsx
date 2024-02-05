import { Show, Component, JSX } from "solid-js";
import clsx from "clsx";
import styles from "./Avatar.module.css";
import { Merge } from "src/utils/types";
import { isValidUrl } from "src/utils/text";

type BaseProps = JSX.IntrinsicElements["img"];
type OwnProps = {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
};
type AvatarProps = Merge<BaseProps, OwnProps>;

const Avatar: Component<AvatarProps> = (props) => {
  const { class: className, src, alt = src, size = "md", ...rest } = props;
  const sizeClass = styles[size];
  return (
    <div class={clsx(styles.root, sizeClass, className)}>
      <Show
        when={isValidUrl(src)}
        fallback={
          <div class={styles.fallback}>{alt ? alt[0].toUpperCase() : ""}</div>
        }
      >
        <img {...rest} alt={alt} class={styles.img} />
      </Show>
    </div>
  );
};

export type { AvatarProps };
export default Avatar;
