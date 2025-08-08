import "destyle.css";

import zoom from "../code/hover/card/zoom/index.html?raw";
import cssZoom from "../code/hover/card/zoom/index.css?raw";

export default {
  title: "Hover/Card",
};

export const Zoom = {
  render: () => `
    <style>${cssZoom}</style>
    ${zoom}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: zoom },
      { name: "CSS", code: cssZoom },
    ],
  },
};
