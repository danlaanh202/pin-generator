import React from "react";
import Template from "../../Template";
import { Box } from "@mui/material";

export default function GenerateContent() {
  return <Box sx={{display: "flex", gap: "8px", flexWrap: "wrap"}}>
    <Template/>
    <Template/>
    <Template/>
    <Template/>
  </Box>
}