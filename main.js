let GRID_SIZE = 16;
const CONTAINER = document.querySelector('.container');
const GRID_SIZE_CONTROLLER = document.querySelector(".grid-size");


function createDivs() {
    let divs = new Array();
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const div = document.createElement("div");
        CONTAINER.appendChild(div);
        divs[i] = div;
    }

    impowerDivs(divs);


}

function impowerDivs(divs) {
    //
    for (const div of divs) {
        div.addEventListener("mouseover", (e) => {
            console.log(e);
            e.target.style.cssText = "background-color:black;"
        });
    }
}

function impowerButtons() {
    //
    GRID_SIZE_CONTROLLER.addEventListener("change", (e) => changeGridSize(e.target.value));
}

function removeDivs() {
    //
    CONTAINER.innerHTML = "";
}

function reset(){
    //
    GRID_SIZE = 16;
    GRID_SIZE_CONTROLLER.value=16;
    removeDivs();
    createDivs();
    changeCssGridLayout(GRID_SIZE);
    
    
}

function changeGridSize(size) {
    //
    if (size >= 1 && size <= 100) {
        GRID_SIZE = size;
        changeCssGridLayout(GRID_SIZE);
        removeDivs();
        createDivs();
    }else{
        reset();
    }
}

function changeCssGridLayout(size) {
    //
    CONTAINER.style.cssText = `grid-template-columns: repeat(${size},1fr);
                               grid-template-rows: repeat(${size},auto);`;
}

window.onload = () => {
    //
    createDivs();
    impowerButtons();
}