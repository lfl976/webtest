import { create, Wrapper, Text } from "./create";
import { Timeline, Animation, ColorAnimation } from "./animation.js";
import { cubicBezier } from "./cubicBezier.js";
let linear = t => t;
let ease = cubicBezier(.25,.1,.25,1);

import { enableGesture } from './gesture';
export class ListView {
  constructor(config) {
    this.children = [];
    this.attributes = new Map();
    this.properties = new Map();
    this.state = Object.create(null);
  }

  setAttribute(name, value) {
    this[name] = value;
  }

  getAttribute(name) {
    return this[name];
  }

  appendChild(child) {
    
    this.children.push(child);
  }

  

  render() {
    let data = this.getAttribute('data');
    return <div class="list-view" style="width:300px">
      {
        data.map(this.children[0])
      }
      </div>;
  }

  mountTo(parent) {
    this.render().mountTo(parent);
  }
}