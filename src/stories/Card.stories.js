import "destyle.css";

import event from "../code/hover/card/event/index.html?raw";
import cssEvent from "../code/hover/card/event/index.css?raw";

export default {
  title: "Hover/Card",
};

export const Event = {
  render: () => `
    <style>${cssEvent}</style>
    ${event}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: event },
      { name: "CSS", code: cssEvent },
    ],
  },
};
