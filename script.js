const gridContainer = document.querySelector('.grid-container');

function drawGrid(squaresPerRow) {
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
}

drawGrid(25);

const gridBox = document.querySelectorAll('#grid-box');

gridBox.forEach((box) => {
  box.addEventListener('mouseenter', () =>
    box.setAttribute('style', 'background: black;')
  );
});
