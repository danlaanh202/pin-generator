import React, { useContext, useEffect, useRef, useState } from "react";
import Template from "../../Template";
import { Box } from "@mui/material";
import { GenerateContext } from "../../../../contexts/GenerateContext";
import Moveable from "react-moveable";

export default function GenerateContent() {
  const { input, handleChangeComponentSetting } = useContext(GenerateContext);
  const [selectedId, setSelectedId] = useState("")
  const moveableRef = useRef<Moveable>(null);
  const targetRef = useRef<any>(null);

  useEffect(() => {
    targetRef.current = document.getElementById(selectedId)
  }, [selectedId])


  return (
    <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      <Moveable ref={moveableRef} target={targetRef}/>
      {input.map((template: any) => (
        <Template
          template={template}
          onSelectComponent={(id: any) => setSelectedId(id)}
          onChange={({ key, value, componentIndex }) =>
            handleChangeComponentSetting({
              id: template.id,
              key,
              value,
              componentIndex,
            })
          }
        />
      ))}
    </Box>
  );
}
