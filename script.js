const grid = document.getElementById("grid");
const clear = document.getElementById("clear");
const slider_value = document.getElementById("range");
const slider_output = document.getElementById("output");
const new_grid_button = document.getElementById("new_grid");
const colorPicker = document.getElementById("colorPicker");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
const grey = document.getElementById("grey");

let pen_type = 1;

let update = () => output.innerText = `${slider_value.value}x${slider_value.value}`;

color.addEventListener("click", function() {
    pen_type=1;
    removeSelection();
    color.classList.add("active");
});
eraser.addEventListener("click",function() {
    pen_type=2;
    removeSelection();
    eraser.classList.add("active");
});
rainbow.addEventListener("click", function() {
    pen_type=3;
    removeSelection();
    rainbow.classList.add("active");
});
grey.addEventListener("click", function() {
    pen_type=4;
    removeSelection();
    grey.classList.add("active");
});
new_grid_button.addEventListener("click", function() {
    new_grid(slider_value.value);
});
slider_value.addEventListener("input", update);
clear.addEventListener("click",clear_grid);

function creat_grid(value){
    for(let i=0;i<value*value;i++){
        const item = document.createElement("div");
        item.addEventListener("mouseover", pen_effect);
        grid.appendChild(item);
    }
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;
}

function removeSelection(){
    const selection = document.querySelector(".active");
    selection.classList.remove("active");
}

function pen_effect(e){
    if(pen_type == 1){
        e.target.style.backgroundColor = `${colorPicker.value}`;
    }
    else if(pen_type == 2){
        e.target.style.backgroundColor = "#f2f1ef";
    }
    else if(pen_type == 3){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    }
    else if(pen_type == 4){
        if(this.style.backgroundColor.match(/rgba/)){
            let currentColor = Number(this.style.backgroundColor.slice(-4,-1));
            if(currentColor <= 0.9){
                this.style.backgroundColor = `rgba(0, 0, 0, ${currentColor+0.1})`;
            }
        }
        else if(this.style.backgroundColor == `rgb(0, 0, 0)`){
            return;
        }
        else{
            this.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
        }
        

    }

}

function clear_grid(){
    const items = document.querySelectorAll("#grid > *");
    for(let i = 0; i<items.length;i++){
        items[i].style.backgroundColor = "#f2f1ef";
    }

}
function new_grid(value){
    clear_grid();
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
    creat_grid(value);
}



creat_grid(slider_value.value);

