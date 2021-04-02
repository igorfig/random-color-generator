const hex = document.querySelector("#hex")
const generate = document.querySelector(".generate")
const copy = document.querySelector(".copy")

/* style */
const header = document.querySelector('header')
const button = document.querySelector("button")

function randomColor(){
    const hex = (Math.random()*0XFFFFFF<<0).toString(16);
    return `#${hex}`;
}

function addColors() {
    hex.value = randomColor()
    hex.classList.remove('hide');
    copy.classList.remove('hide');
    header.style.backgroundColor = `${hex.value}`
    button.style.backgroundColor = `${hex.value}`
}

generate.addEventListener('click', addColors)

copy.addEventListener('click', () => {
    hex.select();
    document.execCommand('copy')
})

