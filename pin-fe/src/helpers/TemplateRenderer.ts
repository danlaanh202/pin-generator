import React from "react";
import { TemplateContext } from "../contexts/TemplateContext";

class TemplateRenderer {
  constructor() {
    this.renderers = {};
    this.initRenderers();
  }

  initRenderers() {
    try {
      this.registerImageRenderer();
      this.registerTextRenderer();
      this.registerBoxRenderer();
    } catch (e) {
      console.error(e);
    }
  }
  registerImageRenderer() {
    this.registerRenderer("image", (comp) => {});
  }
  registerTextRenderer() {
    this.registerRenderer("text", (comp) => {});
  }
  registerBoxRenderer() {
    this.registerRenderer("box", (comp) => {
      return this.renderWithCondition(
        comp,
        <TemplateContext.Consumer>
          {(value) => {
            <div></div>;
          }}
        </TemplateContext.Consumer>
      );
    });
  }

  registerRenderer(index, renderer) {
    this.renderers[index] = renderer;
  }

  render(index, comp) {
    return this?.renderers?.[index]?.(comp);
  }

  renderWithCondition(comp, element) {
    return comp && element;
  }
}
