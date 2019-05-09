import { css } from "styled-components";
import { spacing8 } from "@lds/eden-style-constants";

const shared = css`
  margin: 0;
  padding-left: 1.25rem; /* pull list flush to left side, don't need global spacing value */
  & > ol,
  & > ul {
    margin-bottom: ${spacing8};
  }
`;

export default shared;
