import React from "react";
import Moveable from "react-moveable";
import "./Template.scss";
import { TemplateContextProvider } from "../../../contexts/TemplateContext";

const templateRenderer = new TemplateRenderer

export default function Template() {

  return <TemplateContextProvider>
    <div className="Pin-Template__DesignContainer">
      <div className="Pin-Template__TemplateContainer">
        <div className="Pin-Template__ImageContainer">
          <div className="Pin-Template__ImageContainer--Scale">
            <div className="Pin-Template__ImageContainer--RealSize">
              <div className="Pin-Template__ComponentContainer">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Pin-Template__ActionContainer">
        
      </div>
    </div>
  </TemplateContextProvider>
}