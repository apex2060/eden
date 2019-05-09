import React from "react";

import { storiesOf } from "@storybook/react";
import Demo from "../Demo";

import { Item, Ordered, Unordered, Unstyled } from "../index";

storiesOf("Lists", module)
  .add("Demo", () => <Demo />)

  .add("Ordered", () => (
    <Ordered>
      <Item>Some Item</Item>
      <Item>Some Other Item</Item>
    </Ordered>
  ))
  .add("Unordered", () => (
    <Unordered>
      <Item>Unorderd Item</Item>
      <Item>Some other Unordered Item</Item>
    </Unordered>
  ))
  .add("Unstyled", () => (
    <Unstyled>
      <Item>No list style</Item>
      <Item>Still no list style</Item>
    </Unstyled>
  ));

storiesOf("Complex Lists", module)
  .add("Nested Ordered", () => (
    <Ordered>
      <Item>The first Item</Item>
      <Item>
        This item has a nested list:
        <Ordered>
          <Item>The first item in a child Ordered</Item>
          <Item>The second item in a child Ordered</Item>
        </Ordered>
      </Item>
      <Item>The second real item in the parent Ordered</Item>
    </Ordered>
  ))
  .add("Nested with custom list style", () => (
    <Unordered>
      <Item>Some item with default style</Item>
      <Item>
        This will have a sublist
        <Unordered listStyle="square">
          <Item>Some item text</Item>
          <Item>Some item text</Item>
        </Unordered>
      </Item>
    </Unordered>
  ));
