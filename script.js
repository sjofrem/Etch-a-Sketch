const grid = document.getElementById("grid");
const clear = document.getElementById("clear");
const slider_value = document.getElementById("range");
const slider_output = document.getElementById("output");
const new_grid_button = document.getElementById("new_grid");

let update = () => output.innerText = `${slider_value.value}x${slider_value.value}`;

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

function pen_effect(e){
    e.target.style.backgroundColor = "#2b2928";

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

