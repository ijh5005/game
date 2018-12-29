'use strict';

const noBorders = [];
const oneBorderBoxes = [];
const twoBorderBoxes = [];
const threeBorderBoxes = [];
const complementBorder = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}
const totalPointsToScore = {
  nine: 9,
  thirtysix: 36
}
const setHelper = (helper) => {
  helperButtonSelected = helper;
}
const toggleComputer = () => {
  computerCanMove = !computerCanMove;
}
const gameBoardMapperObj = {
  nine,
  thirtysix
}

let playerOneScore = 0;
let playerTwoScore = 0;
let gameBoardSize = "thirtysix"; // this will be a variable for the user to select
let gameBoard = gameBoardMapperObj[gameBoardSize]; // map the selected gameBoard with its corresponding object
let hasScored = false;
let isFirstPlayerTurn = true;
let isPlayingComputer = true; // indicates if you are playing the computer
let helperButtonSelected = null;
let count = 400;
let counter;
let computerCanMove = true;

ui.populateBoard(); // populate the gameboard into the UI
gameTimer.startTimer();