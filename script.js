// draw grid with default of 16 x 16
const gridContainer = document.querySelector('.grid-container');

function drawGrid(squaresPerRow = 16) {
  for (i = 0; i < squaresPerRow; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    gridContainer.appendChild(row);

    for (j = 0; j < squaresPerRow; j++) {
      const col = document.createElement('div');
      col.className = 'col';
      col.id = 'grid-box';
      row.appendChild(col);
    }
  }
  // creates the drawing effect
  const gridBox = document.querySelectorAll('#grid-box');

  gridBox.forEach((box) => {
    box.addEventListener('mouseenter', () =>
      box.setAttribute('style', 'background: black;')
    );
  });
}

drawGrid();

// re-size button code
const btnResize = document.querySelector('#resize');

btnResize.addEventListener('click', () => {
  const userGridSize = parseInt(prompt('Choose a size between 1 and 100'));
  if (
    userGridSize > 100 ||
    userGridSize < 1 ||
    typeof userGridSize !== 'number'
  ) {
    alert('Not a valid entry. Please select a size between 1 and 100');
  } else {
    gridContainer.replaceChildren();
    drawGrid(userGridSize);
  }
});

// clear button code
const btnClear = document.querySelector('#clear');

btnClear.addEventListener('click', () => {
  document.querySelectorAll('#grid-box').forEach((box) => {
    box.setAttribute('style', 'background: white;');
  });
});

//generate random colour
const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

function getCharacter(index) {
  return hexCharacters[index];
}

function generateNewColor() {
  let hexColorRep = '#';

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }

  return hexColorRep;
}

// random button code
const btnRandom = document.querySelector('#random');

btnRandom.addEventListener('click', () => {
  let newColour = generateNewColor();
  document.querySelectorAll('#grid-box').forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = newColour;
      newColour = generateNewColor();
    });
  });
});

// black button code
const btnBlack = document.querySelector('#black');

btnBlack.addEventListener('click', () => {
  const gridBox = document.querySelectorAll('#grid-box');

  gridBox.forEach((box) => {
    box.addEventListener('mouseenter', () =>
      box.setAttribute('style', 'background: black;')
    );
  });
});

// eraser button code
const btnEraser = document.querySelector('#eraser');

btnEraser.addEventListener('click', () => {
  const gridBox = document.querySelectorAll('#grid-box');

  gridBox.forEach((box) => {
    box.addEventListener('mouseenter', () =>
      box.setAttribute('style', 'background: white;')
    );
  });
});

// colour button code
const btnColour = document.querySelector('#colour');
const pickedColour = document.querySelector('#colour-picker');

btnColour.addEventListener('click', () => {
  const gridBox = document.querySelectorAll('#grid-box');

  gridBox.forEach((box) => {
    box.addEventListener(
      'mouseenter',
      () => (box.style.backgroundColor = pickedColour.value)
    );
  });
});
