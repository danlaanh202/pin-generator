import { ReactNode } from "react";

export interface IComponentWithChildren {
  children: ReactNode;
}
export interface IHomePage extends IComponentWithChildren {}

export interface IContextProvider extends IComponentWithChildren {
  value?: Object;
}

export interface IDrawerContextValue {
  showDrawer: any;
  setShowDrawer: any;
  handleShowDrawer: any;
  handleCloseDrawer: any;
}
