function create(Cls, attributes, ...children) {
  if (typeof Cls === "string") {
  }
  let o = new Cls({
    timer: {},
  });

  for (let name in attributes) {
    o.setAttribute(name, attributes[name]);
  }

  for (let child of children) {
    // o.children.push(child);
    o.appendChild(child);
  }
  return o;
}

class Wraper {
  constructor(config) {
    this.children = [];
    this.root = document.createElement("div");
  }
  set class(v) {
    console.log("Parent::class");
  }

  setAttribute(name, value) {
    console.log(name, value);
  }

  appendChild(child) {
    this.root.appendChild(child);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class Div {
  constructor(config) {
    this.children = [];
    this.root = document.createElement("div");
  }
  set class(v) {
    console.log("iv::class");
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(child) {
    // child.mountTo(this.root);
    this.children.push(child);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
    for (let child of this.children) {
      child.mountTo(this.root);
    }
  }
}

let component = (
  <Div id="a" class="b">
    <Div></Div>
    <Div></Div>
    <Div></Div>
  </Div>
);

component.mountTo(document.body);
// console.log(component);
