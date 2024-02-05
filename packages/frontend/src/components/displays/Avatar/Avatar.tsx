import { Show, Component, JSX, splitProps } from "solid-js";
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
  const [ownProps, childProps] = splitProps(props, [
    "class",
    "src",
    "alt",
    "size",
  ]);
  const sizeClass = styles[ownProps.size ?? "md"];
  return (
    <div class={clsx(styles.root, sizeClass, ownProps.class)}>
      <Show
        when={isValidUrl(ownProps.src)}
        fallback={
          <div class={styles.fallback}>
            {ownProps.alt ? ownProps.alt[0].toUpperCase() : ""}
          </div>
        }
      >
        <img {...childProps} alt={ownProps.alt} class={styles.img} />
      </Show>
    </div>
  );
};

export type { AvatarProps };
export default Avatar;
