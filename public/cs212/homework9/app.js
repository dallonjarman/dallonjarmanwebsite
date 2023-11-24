const numRows = 5;
const numCols = 5;
let board = [];

// Function to initialize the board with random on/off values
function initializeBoard() {
  board = [];
  for (let i = 0; i < numRows; i++) {
    board[i] = [];
    for (let j = 0; j < numCols; j++) {
      board[i][j] = Math.random() < 0.5;
    }
  }
}

// Function to check if all cells are turned off
function checkWin() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (board[i][j]) {
        return false;
      }
    }
  }
  return true;
}

// Function to reset the board with new random values
function resetBoard() {
  initializeBoard();
  renderGrid();
}

function renderGrid() {
  const gameBoard = document.querySelector(".game-board");

  // Clear the existing grid
  gameBoard.innerHTML = "";

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < numCols; j++) {
      const button = document.createElement("button");
      button.classList.add("cell");

      // Set the button background color based on the board value
      if (board[i][j]) {
        button.classList.add("on");
      }

      // Add an event listener to toggle the button and animate the click
      button.addEventListener("click", function() {
        toggleCell(i, j);
        button.classList.add("click");
        setTimeout(function() {
          button.classList.remove("click");
          if (checkWin()) {
            setTimeout(function() {
              alert("You won!");
              resetBoard();
            }, 200);
          }
        }, 200);
      });

      row.appendChild(button);
    }

    gameBoard.appendChild(row);
  }
}

function toggleCell(row, col) {
    // Toggle the cell value
    board[row][col] = !board[row][col];
  
    // Toggle the button class
    const button = document.querySelector(`.row:nth-child(${row + 1}) button:nth-child(${col + 1})`);
    button.classList.toggle("on");
  
    // Toggle the adjacent cells
    if (row > 0) {
      board[row - 1][col] = !board[row - 1][col];
      const topButton = document.querySelector(`.row:nth-child(${row}) button:nth-child(${col + 1})`);
      topButton.classList.toggle("on");
    }
    if (row < numRows - 1) {
      board[row + 1][col] = !board[row + 1][col];
      const bottomButton = document.querySelector(`.row:nth-child(${row + 2}) button:nth-child(${col + 1})`);
      bottomButton.classList.toggle("on");
    }
    if (col > 0) {
      board[row][col - 1] = !board[row][col - 1];
      const leftButton = document.querySelector(`.row:nth-child(${row + 1}) button:nth-child(${col})`);
      leftButton.classList.toggle("on");
    }
    if (col < numCols - 1) {
      board[row][col + 1] = !board[row][col + 1];
      const rightButton = document.querySelector(`.row:nth-child(${row + 1}) button:nth-child(${col + 2})`);
      rightButton.classList.toggle("on");
    }
  }
  

// Initialize the board and render the grid
initializeBoard();
renderGrid();

// Add event listener to reset button
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
  resetBoard();
});
