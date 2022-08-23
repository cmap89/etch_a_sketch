function squareMaker(rowSquareNum = 16) {
    const gridSpace = document.querySelector('#gridContainer').clientHeight;
    for (let i = 0; i < rowSquareNum ** 2; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'singleSquare');
        gridSquare.style.border = '1px solid gray';
        const pixelSize = (gridSpace / rowSquareNum) - 2;
        const squareWidth = gridSquare.style.width = `${pixelSize}px`;
        gridSquare.style.height = `${squareWidth}`;
        gridContainer.append(gridSquare);
    };
};
squareMaker()

let popup = document.getElementById('popup');
function popupOpen() {
    popup.classList.add('openPop');
};
function popupClose() {
    popup.classList.remove('openPop');
    // document.getElementById('gridChooser').value = '';
};

function newGrid() {
    let pixel = document.querySelectorAll('.singleSquare')
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].remove();
    };
    let gridNUm = document.getElementById('gridChooser');
    squareMaker(gridNUm.value);
    gridNUm.value = '';
}

OKBtn = document.getElementById('popupOKBtn');
OKBtn.addEventListener('click', newGrid);

const pixels = document.querySelectorAll('.singleSquare');
pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
    // pixel.style.backgroundColor = 'pink';
}));