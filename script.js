const col = document.querySelector('.col');
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

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', function(){
        square.style.backgroundColor = 'pink';
    });
});