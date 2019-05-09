import React from "react";
import { Ordered, Unordered, Unstyled, Item } from "@lds/eden-list";

const Demo = () => (
  <div>
    <h1>List Examples</h1>
    <h4>Ordered List:</h4>
    <Ordered>
      <Item>Some Item</Item>
      <Item>Some Other Item</Item>
    </Ordered>
    <h4>Unordered List:</h4>
    <Unordered>
      <Item>Unordered Item</Item>
      <Item>Some other Unordered Item</Item>
    </Unordered>
    <h4>Unstyled List:</h4>
    <Unstyled>
      <Item>Unstyled Item</Item>
      <Item>Some other Unstyled Item</Item>
    </Unstyled>
  </div>
);

export default Demo;
