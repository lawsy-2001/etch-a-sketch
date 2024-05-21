const gridContainer = document.querySelector('.grid-container');

function drawGrid(squaresPerRow) {
  for (i = 0; i < squaresPerRow; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    gridContainer.appendChild(row);

    for (j = 0; j < squaresPerRow; j++) {
      const col = document.createElement('div');
      col.className = 'col';
      row.appendChild(col);
    }
  }
}

drawGrid();
