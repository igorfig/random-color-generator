
const circle = document.querySelector(".circle")
const background = color => circle.style.backgroundColor = color;

const MouseEvent = { 
    over() {
        circle.style.width = "150px"
        circle.style.height = "150px";
        circle.style.borderRadius = "9%";
        circle.style.marginTop = "-60px";
      
        circle.style.transition = ".6s";
    },

    out() {
        circle.style.borderRadius = "";
        circle.style.width = "";
        circle.style.height = "";
        circle.style.marginTop = "";

        circle.style.transition = ".6s"
    }

 }
  

export { background, MouseEvent }