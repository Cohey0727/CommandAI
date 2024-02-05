import { createSignal, type Component, type JSX } from "solid-js";
import clsx from "clsx";
import styles from "./TextInput.module.css";
import { Row } from "../../containers";

type BaseProps = JSX.IntrinsicElements["input"];
type OwnProps = {
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
};
type TextInputProps = BaseProps & OwnProps;

const TextInput: Component<TextInputProps> = (props) => {
  const [isFocused, setIsFocused] = createSignal(false);

  const handleFocus: JSX.FocusEventHandlerUnion<
    HTMLInputElement,
    FocusEvent
  > = (e) => {
    setIsFocused(true);
    if (typeof props.onFocus === "function") props.onFocus?.(e);
  };

  const handleBlur: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent> = (
    e
  ) => {
    setIsFocused(false);
    if (typeof props.onBlur === "function") props.onBlur?.(e);
  };

  return (
    <Row
      class={clsx(styles.root, props.class, { [styles.focused]: isFocused() })}
    >
      <input
        {...props}
        class={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Row>
  );
};

export type { TextInputProps };
export default TextInput;
