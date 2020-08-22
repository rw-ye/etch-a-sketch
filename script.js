"use strict";

function createGrid(rows, columns) {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  for (let x = 0; x < rows; x++) {
    document.documentElement.style.setProperty('--row', rows);
    const row = document.createElement('div');
    row.classList.add('item');
    container.appendChild(row);

    for (let y = 1; y < columns; y++) {
      document.documentElement.style.setProperty('--column', columns);
      const column = document.createElement('div');
      column.classList.add('item');
      container.appendChild(column);
    }
  }
}

function sketch() {
  const items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#000000";
    });
  }
  return items;
}

function clearGrid(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "";
  }
}

function removeGrid(items) {
  const container = document.querySelector('.container');
  for (let i = 0; i < items.length; i++) {
    items[i].remove();
  }
  container.remove();
}

function setGrid() {
  let input, gridSize;
  const MAXSIZE = 150,
    MINSIZE = 0;
  do {
    gridSize = prompt("Enter size of grid (Max: 150x150):", input);
  } while (gridSize >= MAXSIZE || gridSize < MINSIZE);
  console.log(`The grid size will be ${gridSize}x${gridSize}`);
  removeGrid(items);
  createGrid(gridSize, gridSize);
  items = sketch();
  return items;
}

function toggleRGB(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function (e) {
      const R = Math.floor(Math.random() * 255);
      const G = Math.floor(Math.random() * 255);
      const B = Math.floor(Math.random() * 255);
      e.target.style.backgroundColor = `rgb(${R},${G},${B})`;
    });
  }
}


createGrid(13, 13);
let items = sketch();