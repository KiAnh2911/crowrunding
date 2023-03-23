import { useState } from "react";
import { debounce } from "lodash";

export default function useOnchange(time = 0) {
  const [value, setValue] = useState(null);
  const handleOnchange = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleOnchange];
}
