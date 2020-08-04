import { create, Wrapper, Text } from "./create";
import { Timeline, Animation, ColorAnimation } from "./animation.js";
import { cubicBezier } from "./cubicBezier.js";
let linear = t => t;
let ease = cubicBezier(.25,.1,.25,1);

import { enableGesture } from './gesture';
export class Panel {
  constructor(config) {
    this.children = [];
    this.attributes = new Map();
    this.properties = new Map();
  }

  setAttribute(name, value) {
    
    this[name] = value;
  }

  appendChild(child) {
    
    this.children.push(child);
  }

  render() {
    
    return <div class="panel" style="border: 1px solid lightgreen;width:300px">
      <h1 style="background-color: lightgreen;margin:0;">{this.title}</h1>
      <div style="min-height:300px;">
        {this.children}
      </div>
      </div>;
  }

  mountTo(parent) {
    this.render().mountTo(parent);
  }
}