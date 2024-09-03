var snakeDiv = document.getElementById('snakeDiv');
var food = document.getElementById('food');
var scoreText = document.getElementById('scoreText');

var score = 0;
var snakeLength = 0;
var out = false;
var timer;
var x = 0;
var y = 0;
var foodX = 0;
var foodY = 0;
var speed = 160;
var snakeBody = [];

var foodXlist = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 400];
var foodYlist = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 400];
createFood();

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            clearInterval(timer);
            timer = setInterval(moveUp, speed);
            break;
        case 'ArrowDown':
            clearInterval(timer);
            timer = setInterval(moveDown, speed);
            break;
        case 'ArrowLeft':
            clearInterval(timer);
            timer = setInterval(moveLeft, speed);
            break;
        case 'ArrowRight':
            clearInterval(timer);
            timer = setInterval(moveRight, speed);
            break;
    }
});

function moveUp() {
    y -= 20;
    updateSnake();
    isFood();
    if (y === -20) {
        handleGameOver();
    }
}

function moveDown() {
    y += 20;
    updateSnake();
    isFood();
    if (y === 420) {
        handleGameOver();
    }
}

function moveLeft() {
    x -= 20;
    updateSnake();
    isFood();
    if (x === -20) {
        handleGameOver();
    }
}

function moveRight() {
    x += 20;
    updateSnake();
    isFood();
    if (x === 420) {
        handleGameOver();
    }
}

function stop() {
    clearInterval(timer);
}

function createFood() {
    var randX = Math.floor(Math.random() * 15);
    var randY = Math.floor(Math.random() * 15);

    foodX = foodXlist[randX];
    foodY = foodYlist[randY];

    food.style.marginLeft = foodX + 'px';
    food.style.marginTop = foodY + 'px';
}

var bSpeed = false;

function isFood() {
    if (x-20 === foodX && y === foodY) {
        createFood();
        score += 1;
        scoreText.textContent = 'Score: ' + score;

        if (!bSpeed) {
            speed -= 10;
        }

        if (speed === 70) {
            bSpeed = true;
            speed = 65;
        }
        if (out) {
            bSpeed = false;
        }

        snakeLength += 1;
    }
}

function updateSnake() {
    // Add the current head position to the snake's body
    snakeBody.unshift({ x: x, y: y });

    // Remove extra segments if the snake is longer than allowed
    while (snakeBody.length > snakeLength) {
        var removedSegment = snakeBody.pop();
        var removedSegmentElement = document.getElementById('snakeSegment' + (snakeLength - 1));
        if (removedSegmentElement) {
            snakeDiv.removeChild(removedSegmentElement);
        }
    }

    // Update the display for each segment of the snake
    snakeBody.forEach((segment, index) => {
        var segmentId = 'snakeSegment' + index;
        var segmentElement = document.getElementById(segmentId);

        if (!segmentElement) {
            // If the segment doesn't exist, create it
            segmentElement = document.createElement('div');
            segmentElement.className = 'snakeClass';
            segmentElement.style.position = 'absolute';
            segmentElement.style.width = '20px';
            segmentElement.style.height = '20px';
            segmentElement.style.backgroundColor = 'rgb(10, 255, 10)';
            segmentElement.style.left = segment.x + 'px';
            segmentElement.style.top = segment.y + 'px';
            segmentElement.id = segmentId;
            snakeDiv.appendChild(segmentElement);
        } else {
            // If the segment exists, update its position
            segmentElement.style.left = segment.x + 'px';
            segmentElement.style.top = segment.y + 'px';
        }
    });
}

function handleGameOver() {
    clearInterval(timer);
    alert('Game Over! Your Score: ' + score);
    out = true;
    createFood();
    x = 0;
    y = 0;
    snakeLength = 1;
    snakeBody = [];
    speed = 160;
    score = 0;
    scoreText.textContent = 'Score: ' + score;

    // Remove all snake segments from the DOM
    while (snakeDiv.firstChild) {
        snakeDiv.removeChild(snakeDiv.firstChild);
    }
}
