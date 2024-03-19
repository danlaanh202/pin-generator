import React from "react";
import { IHomePage } from "../interface";

const AppLayout = ({ children }: IHomePage) => {
  return <div className="Pin-Wrapper">{children}</div>;
};

export default AppLayout;
