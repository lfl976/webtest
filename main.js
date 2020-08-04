import { create, Wrapper, Text } from "./create";
import { Carousel } from "./carousel.js";
import { Panel } from "./Panel.js";
import { TabPanel } from "./TabPanel.js";
import { ListView } from "./ListView.js";
// import { Carousel } from "./carousel.view";

/*class MyComponent {
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
}*/



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
  <Carousel
    data={[
      "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
      "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
      "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
      "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
    ]}
  ></Carousel>
);

let panel = <TabPanel>
  <span title="title1">This is content1</span>
  <span title="title2">This is content2</span>
  <span title="title3">This is content3</span>
  <span title="title4">This is content4</span>
</TabPanel>

let data = [
  {title: "蓝猫",url: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"},
  {title: "橘猫加白",url: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg"},
  {title: "狸花加白",url: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg"},
  {title: "橘猫",url: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"},
]

let list = <ListView data={data}>
  {record => <figure>
    <img src={record.url}/>
<figcaption>{record.title}</figcaption>
  </figure>}
</ListView>

component.mountTo(document.body);
// console.log(component);
