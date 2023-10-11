//reference to div container
const container = document.querySelector('.container');

//default number of grids per side
let numGridsPerSide = 32;

//create first grids pad
makeGrids(numGridsPerSide);
attachListeners();

//reference to grid size adjuster button
const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click',()=>{
    sizeBtnHandler();
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',()=>{
    //remove current grids
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    makeGrids(numGridsPerSide);
    attachListeners();
})


function makeGrids(numGrid){
    let divSize = 500 / Number(numGrid);
    for(let i=0; i<numGrid; i++){ 
        for(let j=0; j<numGrid; j++ ){
            const cell = document.createElement('div');
            cell.classList.toggle('grid');
            cell.style.width = divSize + 'px';   // Setting the width here
            cell.style.height = divSize + 'px';
            container.appendChild(cell);
        }
    }
    
}

function sizeBtnHandler(){
    let size = prompt("Desired number of squares per side");
    if(size==null){
    }else{
        while(size>100||size<1){
            if(size>100){
                  size = prompt("Max number is 100, pleaes re-enter")
              }else{
                  size = prompt("Min number is 1, pleae re-enter")
              }
        }

        numGridsPerSide = size; //update

        //remove current grids
        while(container.firstChild){
              container.removeChild(container.firstChild);
        }
        //create new grid
        makeGrids(size);
        attachListeners();
       
    } 
}

function attachListeners(){
    let isMouseDown = false; //track if mouse is cliked
    //when user clicks on a grid, change the color of the grid
    container.addEventListener('mousedown',(event)=>{
        isMouseDown = true;
        changeColor(event.target);
    });
    //when user drag the mouse (ONLY after it has been clicked), 
    //change color of the grid dragged over
    container.addEventListener('mousemove',(event)=>{
        if(isMouseDown==true){
        changeColor(event.target);
        }
    });
    //when user release the mouse, stop changing color,
    container.addEventListener('mouseup',(event)=>{
        isMouseDown = false;
    });
}

function changeColor(element){
    if(element.classList.contains('grid')){
        element.style.backgroundColor = 'black';
        element.style.borderColor = 'black';
    }
}

