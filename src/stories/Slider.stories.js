import "destyle.css";
import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

import splideCard01 from "../code/hover/slider/splide-card01/index.html?raw";
import cssSplideCard01 from "../code/hover/slider/splide-card01/index.css?raw";
import jsSplideCard01 from "../code/hover/slider/splide-card01/index.js?raw";

export default {
  title: "Hover/Slider",
};

export const SplideCard01 = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `<style>${cssSplideCard01}</style>${splideCard01}`;

    requestAnimationFrame(() => {
      window.Splide = Splide;
      new Function(jsSplideCard01)();
    });

    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: splideCard01 },
      { name: "CSS", code: cssSplideCard01 },
      { name: "JavaScript", code: jsSplideCard01 },
    ],
  },
};
