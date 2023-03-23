import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const {
    type = "text",
    children,
    placeholder = "",
    name,
    control,
    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      className="w-full py-4 px-6 border rounded-xl bg-transparent text-sm   font-medium placeholder:text-text4 dark:placeholder:text-text2 resize-none min-h-[140px] outline-none"
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
