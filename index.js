const tableRows = document.querySelectorAll("tr");

const cellsInRow = [];

const setColor = (ele) => {
  ele.style.backgroundColor = "lightpink";
};

const onCellClick = (row, column) => () => {
  // clear all colors

  cellsInRow.forEach((cells) => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  });

  setColor(cellsInRow[row][column]);

  // Top left traverse
  for (i = row - 1, j = column - 1; i >= 0, j >= 0; i--, j--) {
    if (i >= 0 && j >= 0) {
      setColor(cellsInRow[i][j]);
    }
  }

  // Top right traverse
  for (i = row - 1, j = column + 1; i >= 0, j <= 7; i--, j++) {
    if (i >= 0 && j <= 7) {
      setColor(cellsInRow[i][j]);
    }
  }

  // Bottom left traverse
  for (i = row + 1, j = column - 1; i <= 7, j >= 0; i++, j--) {
    if (i <= 7 && j >= 0) {
      setColor(cellsInRow[i][j]);
    }
  }

  // Bottom right traverse
  for (i = row + 1, j = column + 1; i <= 7, j <= 7; i++, j++) {
    if (i <= 7 && j <= 7) {
      setColor(cellsInRow[i][j]);
    }
  }
};

tableRows.forEach((tableRow, rowIndex) => {
  const cells = tableRow.querySelectorAll("td");

  cellsInRow.push(cells);

  cells.forEach((cell, cellIndex) => {
    cell.addEventListener("click", onCellClick(rowIndex, cellIndex));
  });
});
