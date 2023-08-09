/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from "react-hook-form";

export type RadioTabDataModel = (RadioTabJsonType | string)[];

type Props = {
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  data: RadioTabDataModel;
};

type RadioTabJsonType = {
  value: string;
  label?: string;
};

export function RadioTab(props: Props) {
  if (props.data.length === 0) return <></>;

  // Transform all string into RadioTabJsonType
  const parsedData: RadioTabJsonType[] = [];
  props.data.forEach((item) => {
    if (typeof item === "string") {
      parsedData.push({ value: item });
    } else {
      parsedData.push(item);
    }
  });

  return (
    <div
      className={`flex flex-row place-content-center w-full ${
        props.error
          ? "bg-red-50 border border-red-600 rounded-md"
          : "bg-slate-200"
      }`}
    >
      {parsedData.map((option) => {
        return (
          <label key={option.value}>
            {parsedData.length === 1 ? (
              // auto-checked if only 1 option
              <input
                {...props.register(props.name)}
                className="peer hidden"
                type="radio"
                value={option.value}
                name={props.name}
                checked={true}
              />
            ) : (
              <input
                {...props.register(props.name)}
                className="peer hidden"
                type="radio"
                value={option.value}
                name={props.name}
              />
            )}

            <div
              className="px-4 py-2 rounded-md font-medium transition-all 
                cursor-pointer 
                peer-checked:bg-slate-600 peer-checked:text-white"
            >
              {option.label || option.value}
            </div>
          </label>
        );
      })}
    </div>
  );
}
