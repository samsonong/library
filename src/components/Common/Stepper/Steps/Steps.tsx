import { ReactNode } from "react";

/**
 * Use this as a wrapper for Step components.
 *
 * @param Step The Step components
 */
export function Steps({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
