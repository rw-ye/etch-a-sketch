function createGrid(rows, columns) {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  for (x = 0; x < rows; x++) {
    document.documentElement.style.setProperty('--row', rows);
    const row = document.createElement('div');
    row.classList.add('item');
    container.appendChild(row);

    for (y = 1; y < columns; y++) {
      document.documentElement.style.setProperty('--column', columns);
      const column = document.createElement('div');
      column.classList.add('item');
      container.appendChild(column);
    }
  }
}

function sketch() {
  const items = document.querySelectorAll('.item');
  for (i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "#000000";
      });
  }
}

createGrid(13, 13);
sketch();
