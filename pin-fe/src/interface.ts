import { ReactNode } from "react";

export interface IComponentWithChildren {
  children: ReactNode;
}
export interface IHomePage extends IComponentWithChildren {}
