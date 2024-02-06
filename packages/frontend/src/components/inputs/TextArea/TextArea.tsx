import { createSignal, type Component, type JSX } from "solid-js";
import TextareaAutosize, { TextareaAutosizeProps } from "solid-textarea-autosize";
import clsx from "clsx";
import styles from "./TextArea.module.css";
import { Row } from "../../containers";

type BaseProps = TextareaAutosizeProps;
type OwnProps = {
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
};
type TextAreaProps = BaseProps & OwnProps;

const TextArea: Component<TextAreaProps> = (props) => {
  const [isFocused, setIsFocused] = createSignal(false);

  const handleFocus: JSX.FocusEventHandlerUnion<HTMLTextAreaElement, FocusEvent> = (e) => {
    setIsFocused(true);
    if (typeof props.onFocus === "function") props.onFocus?.(e);
  };

  const handleBlur: JSX.FocusEventHandlerUnion<HTMLTextAreaElement, FocusEvent> = (e) => {
    setIsFocused(false);
    if (typeof props.onBlur === "function") props.onBlur?.(e);
  };

  return (
    <Row class={clsx(styles.root, props.class, { [styles.focused]: isFocused() })}>
      {props.startAdornment}
      <TextareaAutosize {...props} class={styles.input} onFocus={handleFocus} onBlur={handleBlur} />
      {props.endAdornment}
    </Row>
  );
};

export type { TextAreaProps };
export default TextArea;
