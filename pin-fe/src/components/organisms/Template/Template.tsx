import React from "react";
import "./Template.scss";
import { TemplateContextProvider } from "../../../contexts/TemplateContext";
import TemplateRenderer from "../../../helpers/TemplateRenderer";

const templateRenderer = new TemplateRenderer()

export default function Template({template}: any) {
  
  return <TemplateContextProvider>
    <div className="Pin-Template__DesignContainer">
      <div className="Pin-Template__TemplateContainer">
        <div className="Pin-Template__ImageContainer">
          <div className="Pin-Template__ImageContainer--Scale">
            <div className="Pin-Template__ImageContainer--RealSize">
              <div className="Pin-Template__ComponentContainer">
                {template.components.map((component: any) => templateRenderer.render(component.type, component))}
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