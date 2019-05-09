import React from "react";
import { Unordered, Ordered, Unstyled, Item } from "../index";

import { shallow } from "enzyme";

test("accepts a class name", () => {
  expect(
    shallow(
      <Unordered className="hi-mom">
        <Item>Some Item</Item>
        <Item>Some Other Item</Item>
      </Unordered>
    ).hasClass("hi-mom")
  ).toBeTruthy();
  expect(
    shallow(
      <Ordered className="hi-mom">
        <Item>Some Item</Item>
        <Item>Some Other Item</Item>
      </Ordered>
    ).hasClass("hi-mom")
  ).toBeTruthy();
  expect(
    shallow(
      <Unstyled className="hi-mom">
        <Item>Some Item</Item>
        <Item>Some Other Item</Item>
      </Unstyled>
    ).hasClass("hi-mom")
  ).toBeTruthy();
  expect(
    shallow(<Item className="hi-mom">Some Item</Item>).hasClass("hi-mom")
  ).toBeTruthy();
});
