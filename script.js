const col = document.querySelector('.col');
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


col.addEventListener('dblclick', function() {
    drawMode = !drawMode; //toggling between states based on double click function
    if (drawMode) {
        document.body.style.cursor = "url('pencil-cursor.png'), auto"; 
    } else {
        document.body.style.cursor = "default"; 
    }
});
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', function(){
        if(drawMode) {
            square.style.backgroundColor = 'pink';
        }
    });
});