import React from "react";
import Root from "@lds/eden-root";
import { configure, addDecorator } from "@storybook/react";
import { initializeRTL } from "storybook-addon-rtl";

function loadStories() {
  require("../src/stories");
}

addDecorator(story => <Root>{story()}</Root>);

initializeRTL();

configure(loadStories, module);
