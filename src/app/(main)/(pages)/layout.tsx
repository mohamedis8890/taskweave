import type { ReactNode } from "react";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;