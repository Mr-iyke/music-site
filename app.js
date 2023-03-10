"use strict";

let log = console.log;

const hamburger = document.querySelector(".nav-btn");
const menu = document.querySelector(".navbar");
let isShow = false;

hamburger.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false
    menu.style.display = "none";
  } else {
    isShow = true
    menu.style.display = "flex";
  }
});
