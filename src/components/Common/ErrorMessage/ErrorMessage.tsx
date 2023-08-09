/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  message?: string;
}

export function ErrorMessage(props: Props) {
  if (!props.error) return <></>;

  return (
    <div className="relative">
      <div className="text-red-600 text-xs font-medium absolute top-1.5">
        {props.message || (props.error?.message as string)}
      </div>
    </div>
  );
}
