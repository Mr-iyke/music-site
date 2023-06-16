// import html from "./index.html";

// import Splide from "@splidejs/splide";

// import "./global.css";

// import "./global.js";

// import "./style.css";


// console.log(title);

// import "@splidejs/splide/css";

// document.addEventListener("DOMContentLoaded", function () {
//   let slide = new Splide(".splide", {
//     type: "loop",
//     rewind: "true",
//     speed: 1000,
//     perPage: 1,
//     autoplay: true,
//     pauseOnHover: false,
//     width: "100%",
//     height: "100vh",
//   });
//   slide.mount();
// });

// console.log(testing)

import Splide from "@splidejs/splide";

// import "./css/css-navlinks/contact.css";

// import "./global.css";

import "@splidejs/splide/css";

document.addEventListener("DOMContentLoaded", function () {
  let slide = new Splide(".splide", {
    type: "loop",
    rewind: "true",
    speed: 1000,
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    width: "100%",
    height: "100vh",
  });
  slide.mount();
});

