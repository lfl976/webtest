import { create, Wrapper, Text } from "./create";
import { Timeline, Animation, ColorAnimation } from "./animation.js";
import { cubicBezier } from "./cubicBezier.js";
let linear = t => t;
let ease = cubicBezier(.25,.1,.25,1);

import { enableGesture } from './gesture';
export class TabPanel {
  constructor(config) {
    this.children = [];
    this.attributes = new Map();
    this.properties = new Map();
    this.state = Object.create(null);
  }

  setAttribute(name, value) {
    
    this[name] = value;
  }

  appendChild(child) {
    
    this.children.push(child);
  }

  select(i) {
    for (let view of this.childViews) {
      view.style.display = "none"
    }
    this.childViews[i].style.display = "";

    for (let view of this.titleViews) {
      view.classList.remove("selected")
    }
    this.titleViews[i].classList.add("selected")
    // this.titleView.innerText = this.children[i].title
  }

  render() {
    this.childViews = this.children.map(child => <div style="min-height:300px;">{child}</div>)
    this.titleViews = this.children.map((child,i) => <span onClick={()=>this.select(i)} style="background-color: lightgreen;margin:5px 5px 0 5px;">{child.getAttribute("title")||" "}</span>)

    setTimeout(() => this.select(0), 16);
    return <div class="tab-panel" style="border: 1px solid lightgreen;width:300px">
      <h1 style="margin:0;">{this.titleViews}</h1>
      <div style="min-height:300px;">
        {this.childViews}
      </div>
      </div>;
  }

  mountTo(parent) {
    this.render().mountTo(parent);
  }
}