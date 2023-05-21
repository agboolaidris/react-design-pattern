import React, { ForwardedRef, Ref, forwardRef } from "react";

interface WrappedComponentProps {
  // Props of the wrapped component
  message: string;
}

export type WrappedComponentRef =
  | {
      // Ref methods or properties if applicable
      customMethod: () => void;
    }
  | undefined;

function withForwardedRef<TProps extends WrappedComponentProps>(
  WrappedComponent: React.ComponentType<TProps>
) {
  const HOCComponent = (
    props: TProps,
    ref: ForwardedRef<WrappedComponentRef>
  ) => {
    // Manipulate props if needed
    const modifiedProps = {
      ...props,
      // Additional props or modifications
    };

    // Pass the modified props and ref to the wrapped component
    return <WrappedComponent {...modifiedProps} ref={ref} />;
  };

  // Forward the ref to the wrapped component
  const forwardedComponent = forwardRef<WrappedComponentRef, TProps>(
    HOCComponent
  );

  return forwardedComponent;
}

const MyComponent: React.FC<WrappedComponentProps> = ({ message }, ref) => {
  // ...

  return <div ref={ref}>{message}</div>;
};

export const Header = withForwardedRef(MyComponent);
