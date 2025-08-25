import "destyle.css";

import kv from "../code/movie/video/kv/index.html?raw";
import cssKv from "../code/movie/video/kv/index.css?raw";
import jsKv from "../code/movie/video/kv/index.js?raw";

export default {
  title: "Movie/Video",
};

export const Kv = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>${cssKv}</style>
      ${kv}
    `;
    requestAnimationFrame(() => {
      new Function(jsKv)();
    });
    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: kv },
      { name: "CSS", code: cssKv },
      { name: "JavaScript", code: jsKv },
    ],
  },
};
