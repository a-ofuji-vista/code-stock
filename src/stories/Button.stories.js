import button from "../code/button/button.html?raw";
import cssButton from "../code/button/button.css?raw";

export default {
  title: "Code/Button",
};

export const Button01 = {
  render: () => `
    <style>${cssButton}</style>
    ${button}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: button },
      { name: "CSS", code: cssButton },
    ],
  },
};
