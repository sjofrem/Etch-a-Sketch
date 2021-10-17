
function creat_grid(){
    let grid = document.getElementById("grid");
    for(let i=0;i<16*16;i++){
        let item = document.createElement("div");
        grid.appendChild(item);
    }
}
creat_grid();