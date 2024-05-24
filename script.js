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
