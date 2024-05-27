import { ReactNode } from "react";

const MaxwidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="px-[380px]">{children}</div>;
};

export default MaxwidthWrapper;
