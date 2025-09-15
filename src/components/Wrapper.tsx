import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-[100vh] bg-light-bg px-4 py-2">{children}</div>
  );
}
