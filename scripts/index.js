import { hexToHSL, randomHEX, hexToRGB } from "./Colors.js";
import { background, MouseEvent } from "./style.js"

window.addEventListener("load", () => {
  hexOutput.value = "#00000";
  hslOutput.value = "0, 0%, 0%";
  rgbOutput.value = "0, 0, 0";
});

const hexOutput = document.querySelector("#hex-output");
const rgbOutput = document.querySelector("#rgb-output");
const hslOutput = document.querySelector("#hsl-output");

const generate = document.querySelector(".generate");

const backArrow = document.querySelector(".back");
const forwardArrow = document.querySelector(".forward");

let values = [];
let previous = [];
let accumulator;
/* ================== */

function addColors() {
  hexOutput.value = randomHEX();
  rgbOutput.value = hexToRGB(hexOutput.value);
  hslOutput.value = hexToHSL(hexOutput.value);

  background(hexOutput.value)

  values.push(hexOutput.value);
  accumulator = values.length - 1;

  forwardArrow.classList.add("hide-arrow");

  const index = values.length - 1;

  previous = values.slice(0, index);

  if (previous.length > 0) {
    backArrow.classList.remove("hide-arrow");
  }
}

const Arrows = {
  getNextValue() {
    backArrow.classList.remove("hide-arrow");
    ++accumulator;
    hexOutput.value = values[accumulator];
    rgbOutput.value = hexToRGB(hexOutput.value);
    hslOutput.value = hexToHSL(hexOutput.value);

    background(hexOutput.value)

    if (accumulator == values.length - 1) {
      forwardArrow.classList.add("hide-arrow");
    }
  },

  getPreviousValue() {
    if (accumulator == 1) {
      backArrow.classList.add("hide-arrow");
    }

    if (accumulator > 0) {
      --accumulator;
    }

    hexOutput.value = previous[accumulator];
    rgbOutput.value = hexToRGB(hexOutput.value);
    hslOutput.value = hexToHSL(hexOutput.value);

    background(hexOutput.value)

    forwardArrow.classList.remove("hide-arrow");
  },
};

forwardArrow.addEventListener("click", Arrows.getNextValue);
backArrow.addEventListener("click", Arrows.getPreviousValue);
generate.addEventListener("click", addColors);

hexOutput.addEventListener("click", () => {
  hexOutput.select();
  document.execCommand("copy");
});
rgbOutput.addEventListener("click", () => {
  rgbOutput.select();
  navigator.clipboard.writeText(`rgb(${rgbOutput.value})`);
});

hslOutput.addEventListener("click", () => {
  hslOutput.select();
  navigator.clipboard.writeText(`hsl(${hslOutput.value})`);
});


/* style events */

const circle = document.querySelector(".circle")

circle.onmouseover = () => MouseEvent.over();
circle.onmouseout = () => MouseEvent.out();