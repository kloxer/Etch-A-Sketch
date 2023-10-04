
const selectDiv = document.querySelector("body");

const buttonDiv = document.createElement("div");
buttonDiv.id = "buttonDiv"
const button = document.createElement("button");
button.textContent='Reset';
buttonDiv.appendChild(button);

selectDiv.appendChild(buttonDiv);

function createBox(x=10){
    const sketchBox = document.createElement("div"); //create box
    sketchBox.id = "sketchBox";
    sketchBox.style.display = "flex";
    sketchBox.style.padding = "20px";
    
    let rows = x;
    let columns = rows;
    
    for (let i = 0; i <= rows; i++) {
        const row = document.createElement("div");
        row.className="row"
        row.id = i ;
        for (let j = 0; j <= columns; j++) {
            const innerSquare = document.createElement("div");
            innerSquare.className = "box"
            innerSquare.id = j;
    
            innerSquare.style.minWidth="5vh";
            innerSquare.style.minHeight="5vh";
    
    
    
            row.appendChild(innerSquare);
            
        }
        sketchBox.appendChild(row);
        
    }
    
    
    
    selectDiv.appendChild(sketchBox);
    
    const innerSquare = document.querySelectorAll(".box");
    
    innerSquare.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            element.style.backgroundColor = "black";
        
        });
        
    });

}

createBox();

function doClick(){
    let x = prompt("Enter a value for grid size lower than 15:");
    if (x >= 16){
        alert("Higher than 100");
        return;
    }
    let sketchBox = document.querySelector("#sketchBox")
    selectDiv.removeChild(sketchBox);
    
    createBox(x);
}

button.addEventListener('click', doClick);