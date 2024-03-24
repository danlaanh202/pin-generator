import { useState } from "react";

export default function useTemplateInput(defaultState = []) {
  const [input, setInput] = useState(defaultState);

  const handleChangeComponentSetting = ({key, value, componentIndex, id}) => {
    setInput((prev) => {
      return prev.map((x) => {
        const template = {...x};
        if(template.id !== id) return template;
        template.components[componentIndex][key] = value;
        return template;
      })
    })
  }
  

  return {input, handleChangeComponentSetting, setInput}
}