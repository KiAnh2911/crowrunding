import { useState } from "react";

export default function useToggle(initialValues = false) {
  const [value, setValue] = useState(initialValues);
  const handleToggleValue = () => {
    setValue(!value);
  };
  return { value, handleToggleValue };
}
