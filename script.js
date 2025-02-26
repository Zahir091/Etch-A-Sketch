const col = document.querySelector('.col');
const clearButton = document.querySelector('#clear');
const drawStatus = document.querySelector('#drawStatus');
let drawMode = false;

for(let j=0; j<16; j++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for(let i = 0; i<16; i++) {
        let squareBox = document.createElement('div');
        squareBox.setAttribute('class', 'square');
        row.append(squareBox);
    }
    col.append(row);
}


document.addEventListener('dblclick', function() {
    drawMode = !drawMode; //toggling between states based on double click function
    if(drawMode)
        drawStatus.textContent = 'On';
    else
        drawStatus.textContent = 'Off';

});
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', function(){
        if(drawMode) {
            square.style.backgroundColor = 'pink';
        }
    });
});

clearButton.addEventListener('click', function() {
    document.querySelectorAll('.square').forEach(square => {
            square.style.backgroundColor = ' rgb(181, 181, 181)';
        });

});