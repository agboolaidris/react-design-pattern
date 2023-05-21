import { ComponentType, FC, ForwardedRef, forwardRef } from "react";

export type WrappedComponentRef =
  | {
      // Ref methods or properties if applicable
      customMethod: () => void;
    }
  | undefined;

const withDimension = <TProps,>(WrappedComponent: ComponentType<TProps>) => {
  const HOCComponent = (
    props: TProps,
    ref: ForwardedRef<WrappedComponentRef>
  ) => {
    const modified = {
      ...props,
    };
    return <WrappedComponent {...modified} ref={ref} />;
  };

  const forwardedComponent = forwardRef<WrappedComponentRef, TProps>(
    HOCComponent
  );

  return forwardedComponent;
};

type Props = {
  id: string;
};

const Components: FC<Props> = ({ id }) => {
  return <div>header {id}</div>;
};

export const Button = withDimension(Components);
