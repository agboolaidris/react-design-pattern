import { ReactElement, useEffect, useRef } from "react";

type Props = {
  children: ReactElement[];
};

export const MainLayout = ({ children }: Props) => {
  const [header, sidebar, main] = children;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current)
      console.log(ref.current.offsetWidth, ref.current.offsetHeight);
  }, []);

  return (
    <div className="min-h-screen bg-gray-500 w-48">
      <div>{header}</div>
      <div className="flex gap-2" ref={ref}>
        <div>{sidebar}</div>
        <div>{main}</div>
      </div>
    </div>
  );
};
