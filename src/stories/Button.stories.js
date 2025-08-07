import round from "../code/hover/button/round/index.html?raw";
import cssRound from "../code/hover/button/round/index.css?raw";

import iconArrow from "../code/hover/button/icon-arrow/index.html?raw";
import cssIconArrow from "../code/hover/button/icon-arrow/index.css?raw";

export default {
  title: "Hover/Button",
};

export const Round = {
  render: () => `
    <style>${cssRound}</style>
    ${round}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: round },
      { name: "CSS", code: cssRound },
    ],
  },
};

export const IconArrow = {
  render: () => `
    <style>${cssIconArrow}</style>
    ${iconArrow}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: iconArrow },
      { name: "CSS", code: cssIconArrow },
    ],
  },
};

