const GRID_SIZE = 16;
const CONTAINER = document.querySelector('.container');


function createDivs(){
    let divs = new Array();
    for (let i = 0; i < GRID_SIZE*GRID_SIZE; i++) {
        const div = document.createElement("div");
        CONTAINER.appendChild(div);
        divs[i]=div;
    }

    impowerDivs(divs);


}

function impowerDivs(divs){
    //
    for (const div of divs) {
        div.addEventListener("mouseover",(e) =>{
            console.log(e);
            e.target.style.cssText = "background-color:black;"
        });
    }
}

window.onload=()=> {
    //
    createDivs();
}