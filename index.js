import { LEVEL, OBJECT_TYPE } from "./classes/setup";
import GameBoard from "./classes/GameBoard";
import Pacman from "./classes/Pacman";
import { randomMovement, BFSMovement } from "./classes/ghostMoves";
import Ghost from "./classes/ghosts";

//DOM Elements
const gameGrid = document.querySelector("#game");
const scoreBoard = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

export var pacpos;
//Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 70; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//initital setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {
  document.removeEventListener("keydown", (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );

  gameBoard.showGameStatus(gameWin);

  clearInterval(timer);

  startButton.classList.remove("hide");
}

function checkCollision(pacman, ghost) {
  if (pacman.pos === ghost.pos) {
    if (pacman.powerPill) {
      gameBoard.removeObject(ghost.pos, [
        OBJECT_TYPE.GHOST,
        OBJECT_TYPE.SCARED,
        OBJECT_TYPE.BLINKY,
      ]);
      ghost.pos = ghost.startPos;
      score += 100;
    } else {
      gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
      gameBoard.rotateDiv(pacman.pos, 0);
      gameOver(pacman, gameGrid);
    }
  }
}

function gameLoop(pacman, ghost) {
  gameBoard.moveCharacter(pacman);
  checkCollision(pacman, ghost);

  gameBoard.moveCharacter(ghost, pacman.pos);
  checkCollision(pacman, ghost);

  //Check if Pacman eats a dot
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)) {
    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);
    gameBoard.dotCount--;
    score += 10;
  }

  //Check if Pacman eats a powerpill
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.PILL)) {
    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PILL]);

    pacman.powerPill = true;
    score += 50;

    clearTimeout(powerPillTimer);
    powerPillTimer = setTimeout(
      () => (pacman.powerPill = false),
      POWER_PILL_TIME
    );
  }

  //Change ghost scare mode depending on Powerpill
  if(pacman.powerPill!==powerPillActive){
    powerPillActive=pacman.powerPill;
    ghost.isScared=pacman.powerPill;
    
  }
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;

  startButton.classList.add("hide");

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener("keydown", (e) => {
    //console.log(e);
    pacman.handleKeyInput(e, gameBoard.objectExist);
  });

  const ghost = new Ghost(2, 21, BFSMovement, OBJECT_TYPE.BLINKY);

  timer = setInterval(() => gameLoop(pacman, ghost), GLOBAL_SPEED);
}

//Initialise the game
startButton.addEventListener("click", startGame);
