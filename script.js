'use strict'

const default_size = 20;

let size = prompt("please enter your square size: ", default_size);



createPixels(undefined, size);

const button = document.getElementById("button");

button.addEventListener('click', () => {
       size = prompt("please enter your square size: ", default_size);
       
       

       createPixels(undefined, size);
})



function createPixels(boxDimension = 20, size = default_size) {
    let rootdiv = document.getElementById("root-div");
        rootdiv.style.width = `${size * boxDimension}px`;
        rootdiv.style.height = `${size * boxDimension}px` ;
    

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let div = document.createElement("div");
             div.classList.add("white-pixels");
             div.style.width = `${boxDimension}px`
             rootdiv.appendChild(div)
            }
        }

    const pixels = document.querySelectorAll("div.white-pixels");
   pixels.forEach((div) => {
       div.addEventListener("mouseover", function () {
             div.classList.add("yellow-pixels");
       });
   });
}



   