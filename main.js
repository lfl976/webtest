function create(Cls, attributes, ...children) {
  let o;
  if (typeof Cls === "string") {
    o = new Wrapper(Cls);
  } else {
    o = new Cls({
      timer: {},
    });
  }

  for (let name in attributes) {
    o.setAttribute(name, attributes[name]);
  }

  for (let child of children) {
    // o.children.push(child);
    if (typeof child === "string") child = new Text(child);
    o.appendChild(child);
  }
  return o;
}

class Text {
  constructor(text) {
    this.children = [];
    this.root = document.createTextNode(text);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class Wrapper {
  constructor(type) {
    this.children = [];
    this.root = document.createElement(type);
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(child) {
    this.children.push(child);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
    for (let child of this.children) {
      child.mountTo(this.root);
    }
  }
}

class MyComponent {
  constructor(config) {
    this.children = [];
    // this.root = document.createElement("div");
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(child) {
    // child.mountTo(this.root);
    this.children.push(child);
  }

  render() {
    return (
      <article>
        <header>i'm a header</header>
        {this.slot}
        <footer>i'm a footer</footer>
      </article>
    );
  }

  mountTo(parent) {
    this.slot = <div></div>;
    for (let child of this.children) {
      this.slot.appendChild(child);
    }
    this.render().mountTo(parent);
  }
}

// let component = (
//   <Div id="a" class="b" style="width:100px;height:100px;background:red">
//     <div>
//       <span></span>
//     </div>
//     <p></p>
//     <Div>
//       <p></p>
//     </Div>
//     <Div></Div>
//   </Div>
// );

let component = (
  <MyComponent>
    <div>text</div>
  </MyComponent>
);

component.mountTo(document.body);
// console.log(component);
