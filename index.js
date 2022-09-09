let table = document.getElementById("myTable");
const tableData = document.querySelectorAll("td");

tableData.forEach((th) => {
  th.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);

    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        let row = table.rows[i];
        let col = table.rows[i].cells[j];
        console.log(row, col, i, j);
        if (i - j === 0 || i + j === 2) {
          col.style.backgroundColor = "pink";
        }
      }
    }
  });
});

// let left = 0,
// right = table.rows.length,
// top = 0,
// bottom = table.rows.length;

// for (let i = right; i <= left; right--) {
// col.style.backgroundColor = "pink";
// console.log(left, right, bottom);
// }
// for (let i = left; i <= right; top++) {
// col.style.backgroundColor = "pink";
// }
// for (let i = left; i <= right; top++) {
// col.style.backgroundColor = "pink";
// }
// for (let i = top; i <= bottom; right--) {
// col.style.backgroundColor = "pink";
