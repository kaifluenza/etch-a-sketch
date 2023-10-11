//reference to adjuster button
const sizeBtn = document.querySelector('#size');

function sizeBtnHandler(){
    let size = prompt("Desired number of squares per side");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let divSize = 500 / Number(size);
    let str = divSize.toString();

    for(let i=0; i<size; i++){ 
        for(let j=0; j<size; j++ ){
            const cell = document.createElement('div');
            cell.classList.toggle('grid');
            cell.style.width = divSize + 'px';   // Setting the width here
            cell.style.height = divSize + 'px';
            container.appendChild(cell);
            
        }
        
    }

    attachListeners();
}

sizeBtn.addEventListener('click',()=>{
    sizeBtnHandler();
});



//reference to div container
const container = document.querySelector('.container');

//create grid divs until it fills up the container
while(container.scrollHeight===container.clientHeight){
    const div = document.createElement('div');
    div.classList.toggle('grid');
    container.appendChild(div);

    //when container is overfilled, remove the extra div, and exit out of loop
    if(container.scrollHeight>container.clientHeight){
        container.removeChild(div);
        break;
    }
}

//track if mouse is cliked
let isMouseDown = false;

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
//by setting flag to false so changeColor is not invoked 
//in mousemove event
container.addEventListener('mouseup',(event)=>{
    isMouseDown = false;
});


function changeColor(element){
    if(element.classList.contains('grid')){
        element.style.backgroundColor = 'red';
        element.style.borderColor = 'red';
    }
}



function attachListeners(){
    //track if mouse is cliked
let isMouseDown = false;

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
//by setting flag to false so changeColor is not invoked 
//in mousemove event
container.addEventListener('mouseup',(event)=>{
    isMouseDown = false;
});


function changeColor(element){
    if(element.classList.contains('grid')){
        element.style.backgroundColor = 'red';
        element.style.borderColor = 'red';
    }
}
}