const hex = document.querySelector("#hex")
const generate = document.querySelector(".generate")
const copy = document.querySelector(".copy")

/* style */

const header = document.querySelector('header')
const button = document.querySelector("button")

/* ================== */

/* previous & next */

const previousArrow = document.querySelector(".previous")
const nextArrow =  document.querySelector(".next")

let values = [];
let next = [];
let previous = [];

/* ================== */

function randomColor() {
    const hex = (Math.random() * 0XFFFFFF << 0).toString(16);
    return `#${hex}`;
}

function addColors() {
    hex.value = randomColor()
    header.style.backgroundColor = `${hex.value}`
    button.style.backgroundColor = `${hex.value}`
    
    next.push(hex.value)

    if(next.length > 1) {
        next.shift()
    }

    values.push(hex.value)

    if (values.length > 2) {
        values.splice(0, 1)
    }

    previous = values.slice(-2, -1)

    if (previous.length > 0) {
        previousArrow.classList.remove('hide-arrow')
    }
        
    if(!nextArrow.classList.contains('hide-arrow')){
        nextArrow.classList.add('hide-arrow')
    }

    hex.classList.remove('hide');
    copy.classList.remove('hide');

}

const Arrows = {
    getNextValue(){    
        hex.value = next
        header.style.backgroundColor = `${next}`
        button.style.backgroundColor = `${next}`

        nextArrow.classList.add('hide-arrow')
        previousArrow.classList.remove('hide-arrow')
    },

    getPreviousValue(){
        hex.value = previous
        header.style.backgroundColor = `${previous}`
        button.style.backgroundColor = `${previous}`

        previousArrow.classList.add('hide-arrow')
        nextArrow.classList.remove('hide-arrow')

    }   
}

nextArrow.addEventListener('click', Arrows.getNextValue)
previousArrow.addEventListener('click', Arrows.getPreviousValue)

generate.addEventListener('click', addColors)

copy.addEventListener('click', () => {
    hex.select();
    document.execCommand('copy')
})