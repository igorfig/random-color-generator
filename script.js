const hex = document.querySelector("#hex");
const generate = document.querySelector(".generate");
const copy = document.querySelector(".copy");

/* style */

const header = document.querySelector("header");
const button = document.querySelector("button");

/* ================== */

/* previous & next */
const previousArrow = document.querySelector(".previous");
const nextArrow = document.querySelector(".next");

let values = [];
let previous = [];
let counter;
/* ================== */

function randomColor() {
  const hex = ((Math.random() * 0xffffff) << 0).toString(16);
  if (hex.length >= 6) {
    return `#${hex}`;
  } else {
    return `#${hex}` + Math.floor(Math.random() * (5 + 1) + 3);
  }
}

function addColors() {
  hex.value = randomColor();
  header.style.backgroundColor = `${hex.value}`;
  button.style.backgroundColor = `${hex.value}`;

  values.push(hex.value);
  counter = values.length - 1;

  nextArrow.classList.add("hide-arrow");

  const index = values.length - 1;

  previous = values.slice(0, index);

  if (previous.length > 0) {
    previousArrow.classList.remove("hide-arrow");
  }

  hex.classList.remove("hide");
  copy.classList.remove("hide");
}

const Arrows = {
  getNextValue() {
    previousArrow.classList.remove("hide-arrow");
    ++counter;
    hex.value = values[counter];
    header.style.backgroundColor = `${hex.value}`;
    button.style.backgroundColor = `${hex.value}`;

    if (counter == values.length - 1) {
      nextArrow.classList.add("hide-arrow");
    }
  },

  getPreviousValue() {
    if (counter > 0) {
      --counter;
    } else {
      previousArrow.classList.add("hide-arrow");
    }

    hex.value = previous[counter];
    header.style.backgroundColor = `${hex.value}`;
    button.style.backgroundColor = `${hex.value}`;

    nextArrow.classList.remove("hide-arrow");
  },
};

nextArrow.addEventListener("click", Arrows.getNextValue);
previousArrow.addEventListener("click", Arrows.getPreviousValue);

generate.addEventListener("click", addColors);

copy.addEventListener("click", () => {
  hex.select();
  document.execCommand("copy");
});
