// set up the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// set up the snake
var snakeSize = 10;
var snake = [{x: canvasWidth/2, y: canvasHeight/2}];
var snakeVelX = snakeSize;
var snakeVelY = 0;

// set up the apple
var appleSize = 10;
var appleX = Math.floor(Math.random() * (canvasWidth - appleSize));
var appleY = Math.floor(Math.random() * (canvasHeight - appleSize));

// define the main draw function
function draw() {
  // clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // draw the snake and apple
  drawSnake();
  drawApple();
}

// define the drawSnake function
function drawSnake() {
  ctx.fillStyle = "#333";
  for (var i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
  }
}

// define the drawApple function
function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX, appleY, appleSize, appleSize);
}

// define the update function
function update() {
  // update the position of the snake's head
  var headX = snake[0].x + snakeVelX;
  var headY = snake[0].y + snakeVelY;

  // check if the snake's head has collided with the apple
  if (headX < appleX + appleSize && headX + snakeSize > appleX && headY < appleY + appleSize && headY + snakeSize > appleY) {
    // randomly reposition the apple
    appleX = Math.floor(Math.random() * (canvasWidth - appleSize));
    appleY = Math.floor(Math.random() * (canvasHeight - appleSize));
  } else {
    // remove the last cube of the snake
    snake.pop();
  }

  // move the snake's cubes
  for (var i = snake.length - 1; i > 0; i--) {
    snake[i].x = snake[i - 1].x;
    snake[i].y = snake[i - 1].y;
  }

  // update the position of the snake's head
  snake[0].x = headX;
  snake[0].y = headY;

  // check if the snake has collided with the edge of the canvas or with its own body
  for (var i = 1; i < snake.length; i++) {
