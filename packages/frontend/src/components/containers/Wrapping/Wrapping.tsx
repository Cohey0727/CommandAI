import type { Component, JSX } from "solid-js";

type WrappingProps<P = {}> = {
  wrapper: Component<P>;
  wrapperProps: P;
  when: boolean;
  children: JSX.Element;
};

function Wrapping<P = {}>(props: WrappingProps<P>) {
  return props.when ? (
    <props.wrapper {...props.wrapperProps}>{props.children}</props.wrapper>
  ) : (
    props.children
  );
}

export type { WrappingProps };
export default Wrapping;
