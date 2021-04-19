// Select color input
const colorPlate = document.getElementById('colorPicker');

// Select size input
const canvasHeight = document.getElementById('inputHeight');
const canvasWidth = document.getElementById('inputWidth');
const canvasForm = document.getElementById('sizePicker');

//select table
const canvas = document.getElementById('pixelCanvas');

// when size is submitted by user, call makeGrid()

canvasForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let canvasHt = canvasHeight.value;
    let canvasWd = canvasWidth.value;
    makeGrid(canvasHt,canvasWd);
});

// defining makeGrid function

function makeGrid(ht,wd) {
    canvas.innerHTML = '';
    
    for(let i = 0; i<ht; i++) {
        let newRow= canvas.insertRow();
        for(let j=0; j<wd; j++) {
            let newCell = newRow.insertCell();
            newCell.addEventListener('click', function(event) {
                let colorPicked = colorPlate.value;
                event.target.style.backgroundColor = colorPicked;
                event.preventDefault;
            });
        }
    }
}
