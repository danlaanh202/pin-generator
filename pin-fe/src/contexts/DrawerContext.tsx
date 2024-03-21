import React, { createContext, useState } from "react";
import { IContextProvider, IDrawerContextValue } from "../interface";

export const DrawerContext = createContext<IDrawerContextValue>({});

export const DrawerContextProvider = ({ children }: IContextProvider) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleShowDrawer = () => {
    setShowDrawer(true);
  };
  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };
  const value = {
    showDrawer,
    setShowDrawer,
    handleShowDrawer,
    handleCloseDrawer,
  };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
