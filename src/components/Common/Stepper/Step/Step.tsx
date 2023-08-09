import { ReactNode } from "react";

interface Props {
  hasNext?: boolean;
  children: ReactNode;
}

/**
 * This should be wrapped in Steps component
 */
export function Step(props: Props) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col">
        <div className="border-2 rounded-full border-primary-600 p-0.5">
          {/* Node */}
          <div className="h-2.5 w-2.5 rounded-full bg-primary-600"></div>
        </div>
        {/* Link */}
        {props.hasNext ? (
          <div className="mx-auto h-full w-px rounded-full bg-slate-400"></div>
        ) : (
          <></>
        )}
      </div>
      <div className={props.hasNext ? "pb-20" : ""}>{props.children}</div>
    </div>
  );
}
