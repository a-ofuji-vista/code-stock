const target = ".splide.splide-card01";
const options = {
  type: "loop",
  perPage: 4,
  focus: 0,
  gap: 8,
  breakpoints: {
    1024: {
      perPage: 3,
    },
    768: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
};
const mySplide = new Splide(target, options);

mySplide.mount();
