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

const task = {
  startTimer: () => {
    const timer = () => {
      if (count <= 0) {
        task.youLose();
        task.stopTimer()
        return;
      }
      count--;
      $("#time").text(count / 100);
    }
    task.stopTimer();
    counter = setInterval(timer, 10); // 10 will run it every 100th of a second
  },
  youLose: () => {
    console.log("you lose")
  },
  stopTimer: () => {
    clearInterval(counter);
  },
  incrementTimer: () => {
    count += 300;
    let time;
    const timeInString = count.toString();
    const length = timeInString.length;
    if (length < 4) {
      time = `${timeInString.slice(0, 1)}.${timeInString.slice(1)}`
    } else {
      const beforeDecimal = timeInString.length - 2;
      time = `${timeInString.slice(0, beforeDecimal)}.${timeInString.slice(beforeDecimal)}`
    }
    $("#time").text(time);
  },
  populateBoard: () => { // populate the gameboard into the UI
    document.getElementById("board").innerHTML = ""; // clear the board before rendering it
    for (let box in gameBoard) {
      const gridBox = document.createElement("div");
      gridBox.classList.add(...boxInfo.getAllBoxClasses(box));
      boxInfo.getNumberText(box, gridBox);
      gridBox.addEventListener("click", (e) => { // add a click event to the box click on borders
        if (!isFirstPlayerTurn) return null; // prevent out of turn clicks
        task.highlightClickedBorder(e.offsetX, e.offsetY, box, board);
      });
      $("#board").append(gridBox); // add the box to the game board
    }
    task.setScores();
    task.adjustBorderCountArrays(); // add boxes with one border to the oneBorderBoxes array, etc...
  },
  setScores: () => {
    document.getElementById("playerOneScore").innerText = playerOneScore;
    document.getElementById("playerTwoScore").innerText = playerTwoScore;
  },
  highlightClickedBorder: (offsetX, offsetY, boxNumber, board) => {
    const height = $(".box").height();
    const upperOutOfBoundsNumber = height - 15;
    const lowerOutOfBoundsNumber = 15;
    if (task.isALineClick(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber)) { // check to see if a line is clicked
      const lineClicked = task.getLineClicked(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber); // cache the clicked line
      const hasClickBorderPreviously = (gameBoard[boxNumber].borders[lineClicked] === true);
      if (!hasClickBorderPreviously) { // prevent multiple click to the same border
        task.clickOnBorder(boxNumber, lineClicked);
      }
    } else if (helperButtonSelected) {
      task.useHelper(boxNumber);
      helperButtonSelected = null;
    }
  },
  useHelper: (box) => {
    if (helperButtonSelected === "minus") {
      // does the box have at least one line highlighted
      if (boxInfo.getBorderCount(box) > 0) {
        // choose a random line in the box to fill in
        task.subtractOneBorderFrom(box);
      } else {
        console.log("can't select box to minus");
      }
    } else if (helperButtonSelected === "plus") {
      // does the box have less than four lines highlighted
      if (boxInfo.getBorderCount(box) < 4) {
        // choose a random line in the box to remove
        task.addOneBorderTo(box);
      } else {
        console.log("can't select box to add");
      }
    }
  },
  clickOnBorder: (boxNumber, lineClicked, helpUser = false, subtractBorder = false) => {
    if (isFirstPlayerTurn) {
      task.incrementTimer();
    }
    const action = subtractBorder ? null : true;
    task.removeScoreColorIfRemovingBorder(boxNumber, subtractBorder)
    gameBoard[boxNumber].borders[lineClicked] = action;
    task.highlightBoxIfScored(boxNumber);
    let adjacentBox = null;
    let adjBoxNumber = null;
    const hasAdjacentBox = (gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`] !== null);
    if (hasAdjacentBox) {
      adjacentBox = gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`].boxNumber;
      gameBoard[`box${adjacentBox}`].borders[complementBorder[`${lineClicked}`]] = action;
      task.highlightBoxIfScored(`box${adjacentBox}`);
      adjBoxNumber = `box${adjacentBox}`;
      task.removeScoreColorIfRemovingBorder(`box${adjacentBox}`, subtractBorder);
    }
    task.closeTheBoxConnection({
      boxNumber,
      adjacentBox: adjBoxNumber,
      boxNumberClosedBorder: lineClicked,
      adjacentBoxClosedBorder: complementBorder[`${lineClicked}`]
    });
    const scoreParams = [boxNumber, `box${adjacentBox}`].filter(data => data !== "boxnull");
    task.adjustScore(...scoreParams); // adjust the score
    if (!helpUser) {
      task.setTurnPlayer(); // set the turn player
    }
    task.isGameOver();
    task.populateBoard(board);
  },
  removeScoreColorIfRemovingBorder: (box, subtractBorder) => {
    if (subtractBorder) {
      gameBoard[box].whoScored = null;
      $(`.${box}`).removeClass("firstPlayerScored").removeClass("secondPlayerScored");
    }
  },
  highlightBoxIfScored: (boxNumber) => {
    if (boxInfo.getBorderCount(boxNumber) === 4) {
      gameBoard[boxNumber].whoScored = isFirstPlayerTurn ? "firstPlayerScored" : "secondPlayerScored";
    }
  },
  isALineClick: (offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber) => {
    const inUpperOutOfBounds = (offsetX > upperOutOfBoundsNumber) || (offsetY > upperOutOfBoundsNumber);
    const inLowerOutOfBounds = (offsetX < lowerOutOfBoundsNumber) || (offsetY < lowerOutOfBoundsNumber);
    const inTopLeftCorner = (offsetX < lowerOutOfBoundsNumber) && (offsetY < lowerOutOfBoundsNumber);
    const inBottomLeftCorner = (offsetX < lowerOutOfBoundsNumber) && (offsetY > upperOutOfBoundsNumber);
    const inTopRightCorner = (offsetX > upperOutOfBoundsNumber) && (offsetY < lowerOutOfBoundsNumber);
    const inBottomRightCorner = (offsetX > upperOutOfBoundsNumber) && (offsetY > upperOutOfBoundsNumber);
    const hasClickedACorner = (inTopLeftCorner || inBottomLeftCorner || inTopRightCorner || inBottomRightCorner);
    return (inUpperOutOfBounds || inLowerOutOfBounds) && !hasClickedACorner;
  },
  getLineClicked: (offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber) => {
    if (offsetX > upperOutOfBoundsNumber) return "right";
    if (offsetX < lowerOutOfBoundsNumber) return "left";
    if (offsetY > upperOutOfBoundsNumber) return "bottom";
    if (offsetY < lowerOutOfBoundsNumber) return "top";
  },
  closeTheBoxConnection: (closeTheBoxConnectionParams) => {
    const {
      boxNumber,
      adjacentBox,
      boxNumberClosedBorder,
      adjacentBoxClosedBorder
    } = closeTheBoxConnectionParams;
    if (gameBoard[boxNumber].surroundingBoxes[`${boxNumberClosedBorder}Box`]) gameBoard[boxNumber].surroundingBoxes[`${boxNumberClosedBorder}Box`].isConnected = false;
    if (adjacentBox && gameBoard[adjacentBox].surroundingBoxes[`${adjacentBoxClosedBorder}Box`]) gameBoard[adjacentBox].surroundingBoxes[`${adjacentBoxClosedBorder}Box`].isConnected = false;
  },
  adjustScore: (boxNumber, adjacentBoxNumber) => {
    const score = (box) => {
      if (!task.hasScored(box)) return null; // check to see if player scored a point
      (isFirstPlayerTurn) ? playerOneScore++ : playerTwoScore++;
      hasScored = true;
    }
    if (boxNumber) score(boxNumber);
    if (adjacentBoxNumber) score(adjacentBoxNumber);
  },
  hasScored: (boxNumber) => {
    const isTopClicked = gameBoard[boxNumber].borders.top;
    const isRightClicked = gameBoard[boxNumber].borders.right;
    const isBottomClicked = gameBoard[boxNumber].borders.bottom;
    const isLeftClicked = gameBoard[boxNumber].borders.left;
    return (isTopClicked && isRightClicked && isBottomClicked && isLeftClicked);
  },
  setTurnPlayer: () => {
    isFirstPlayerTurn = (hasScored) ? isFirstPlayerTurn : !isFirstPlayerTurn;
    hasScored = false;
    if (isPlayingComputer && !isFirstPlayerTurn) { // make the computer move
      task.makeComputerMove();
    } else {
      task.startTimer();
    }
  },
  isGameOver: () => {
    let totalPointsScored = 0;
    Object.keys(gameBoard).forEach(box => {
      const firstPlayerScored = $(`.${box}`).attr("class").includes("firstPlayerScored");
      const secondPlayerScored = $(`.${box}`).attr("class").includes("secondPlayerScored");
      if (firstPlayerScored || secondPlayerScored) totalPointsScored++;
    })
    if (totalPointsScored === (totalPointsToScore[gameBoardSize] - 1)) console.log("game complete")
  },
  adjustBorderCountArrays: () => {
    task.clearBorderArrays();
    for (let box in gameBoard) {
      const borderCount = boxInfo.getBorderCount(box);
      if (borderCount === 0) noBorders.push(box);
      else if (borderCount === 1) oneBorderBoxes.push(box);
      else if (borderCount === 2) twoBorderBoxes.push(box)
      else if (borderCount === 3) threeBorderBoxes.push(box);
    }
  },
  clearBorderArrays: () => {
    noBorders.length = 0;
    oneBorderBoxes.length = 0;
    twoBorderBoxes.length = 0
    threeBorderBoxes.length = 0;
  },
  makeComputerMove: () => {
    if (!computerCanMove) return null
    task.stopTimer();
    // logic to make computer move
    setTimeout(() => { // makes the computer delay before making a move
      task.makeMoveInSafeBox()
    }, 100);
  },
  makeMoveInSafeBox: () => { // make a computer move that doesn't allow opponent the score
    if (threeBorderBoxes.length !== 0) task.getAFreeBox();
    else if (noBorders.length !== 0) task.clickInANoBorderBox();
    else if (oneBorderBoxes.length !== 0) task.clickInAOneBorderBox();
    else if (twoBorderBoxes.length !== 0) task.clickInATwoBorderBox();
    task.populateBoard();
  },
  getAFreeBox: () => {
    const clickBox = task.getRandomIndexInArray(threeBorderBoxes);
    Object.keys(gameboardMapper.getGameBoardClickBox(clickBox).borders).forEach(data => {
      if (!gameboardMapper.getGameBoardClickBox(clickBox).borders[data]) {
        task.clickOnBorder(clickBox, data);
      }
    })
  },
  clickInANoBorderBox: () => {
    let keepGoing = true;
    while (keepGoing) {
      // choose a randon box in the array containing box with no border
      const clickBox = task.getRandomIndexInArray(noBorders);
      //remove that box from that array to avoid checking it multiple times
      noBorders.splice(noBorders.indexOf(clickBox), 1);
      // get the boxes around it that only has one or less borders already selected
      const oneOrLessBorderSurroundingBoxes = task.getLessThanOneBorderNonConnectedSurroundingBoxes(clickBox);
      // choose a random box of the potential boxes to click
      const selectedBox = task.getRandomIndexInArray(oneOrLessBorderSurroundingBoxes);
      // cache the line between the two boxes to use when clicking
      const lineBetweenBoxes = task.getLineBetweenBoxes(clickBox, selectedBox);
      // is the box on the edge of the gameboard and has no adjcent box
      const edgeBox = task.edgeBox(clickBox);
      // if the box is an edge box you can click the edge as a safe move
      if (edgeBox.hasEdgeBox) {
        keepGoing = false;
        task.clickOnBorder(clickBox, edgeBox.clickSide);
        break;
      }
      // if the noBorders array is empty all avaible chooses are not safe to click
      if (noBorders.length === 0) {
        keepGoing = false;
      }
      // if we found a safe box to click move the move
      if (selectedBox && lineBetweenBoxes) {
        keepGoing = false;
        const line = lineBetweenBoxes.replace("Box", "");
        task.clickOnBorder(clickBox, line);
      } else {
        // if not, rethink what kind of box we want to potentially click
        task.makeMoveInSafeBox();
      }
    }
  },
  clickInAOneBorderBox: () => {
    const safeClickBoxWithSide = [];
    const oneBorder = [...oneBorderBoxes];
    oneBorder.forEach(box => {
      oneBorderBoxes.splice(oneBorderBoxes.indexOf(box), 1);
      const edgeBox = task.edgeBox(box);
      if (edgeBox.hasEdgeBox) { // task takes care of the corner cases by clicked its empty side
        safeClickBoxWithSide.push({
          clickBox: box,
          clickSide: edgeBox.clickSide
        });
      } else {
        const surroundingOnBorderBoxes = task.getSurroundingBoxes(box).filter(data => oneBorderBoxes.includes(`box${data}`));
        surroundingOnBorderBoxes.forEach(data => {
          const adjObj = task.isAdjacentBoxesConnected(box, `box${data}`);
          if (adjObj.isConnected) {
            safeClickBoxWithSide.push({
              clickBox: box,
              clickSide: adjObj.side
            });
          }
        });
      }
    })
    if (safeClickBoxWithSide.length !== 0) {
      const clickBoxObj = task.getRandomIndexInArray(safeClickBoxWithSide);
      task.clickOnBorder(clickBoxObj.clickBox, clickBoxObj.clickSide);
    } else {
      task.makeMoveInSafeBox();
    }
  },
  clickInATwoBorderBox: () => {
    // all possible connected box combinations
    const connectedBoxCombinations = [];
    // inspected boxes
    const inspectedBoxes = [];
    let allConnectedBoxes = [];
    // filter for two line boxes
    const twoLineBoxes = Object.keys(gameBoard).filter(boxNumber => boxInfo.getBorderCount(boxNumber) === 2);
    // stops the while loop
    let keepGoing = true;
    // number of boxes inpecting
    const numberOfBoxesInspecting = twoLineBoxes.length;
    while (keepGoing) {
      let calledFunction = false;
      // cache inspecting box
      const inspectingBox = twoLineBoxes[0];
      const recordConnectedBoxes = (boxNumber) => {
        // push into allConnectedBoxes and inspectedBoxes
        allConnectedBoxes.push(boxNumber);
        inspectedBoxes.push(boxNumber);
        // remove it from the uninspected
        twoLineBoxes.splice(twoLineBoxes.indexOf(boxNumber), 1);
        // get the connected boxes
        const surroundingBoxes = task.getSurroundingBoxes(boxNumber);
        // filter for connected boxes
        const connectedBoxes = surroundingBoxes.filter(box => task.isAdjacentBoxesConnected(`box${box}`, boxNumber).isConnected);
        // filter out for 2 line boxes
        const filterBoxesForTwoLineConnectedBoxes = connectedBoxes.filter(data => twoLineBoxes.includes(`box${data}`)).map(box => `box${box}`);
        filterBoxesForTwoLineConnectedBoxes.forEach(box => {
          if (!allConnectedBoxes.includes(box)) recordConnectedBoxes(box);
        })
      }
      if (!calledFunction) {
        calledFunction = true;
        recordConnectedBoxes(inspectingBox);
      }
      connectedBoxCombinations.push([...allConnectedBoxes])
      allConnectedBoxes.length = 0;
      // stop the while loop once all twoLineBoxes are inspected
      if (inspectedBoxes.length === numberOfBoxesInspecting) keepGoing = false;
    }
    // choose a box to click
    task.chooseBoxToClickInEndGame(connectedBoxCombinations);
  },
  chooseBoxToClickInEndGame: (multiScoreBoxePaths) => {
    const pathToClickABox = multiScoreBoxePaths.sort((a, b) => a.length - b.length);
    const boxToClick = task.getRandomIndexInArray(pathToClickABox[0]);
    let lineClick;
    Object.keys(gameboardMapper.getGameBoardClickBox(boxToClick).borders).forEach(data => {
      if (gameboardMapper.getGameBoardClickBox(boxToClick).borders[data] === null) {
        lineClick = data;
      }
    });
    // after picking the line, test it out to see if it gives the same amount of boxes as its array length
    // const enterVirtualEnviroment = true;
    // task.clickOnBorder(boxToClick, lineClick, enterVirtualEnviroment);
    task.clickOnBorder(boxToClick, lineClick);
  },
  isAdjacentBoxesConnected: (box1, box2) => {
    const adjObj = {
      isConnected: false
    }
    const bordersBox2 = gameboardMapper.getGameBoardClickBox(box2).borders;
    const surroundingBoxes = gameboardMapper.getGameBoardClickBox(box1).surroundingBoxes;
    gameboardMapper.getSurroundingBoxesKeys(box1).forEach(data => {
      const complement = complementBorder[data.replace("Box", "")];
      if (surroundingBoxes[data] && (`box${surroundingBoxes[data].boxNumber}` === box2) && (bordersBox2[complement] === null)) {
        adjObj.isConnected = true;
        adjObj.side = data.replace("Box", "");
      }
    })
    return adjObj;
  },
  edgeBox: (clickBox) => { // return an edge box
    let edgeBox = {
      hasEdgeBox: false,
      clickSide: null
    };
    const surroundingBoxesKeys = gameboardMapper.getSurroundingBoxesKeys(clickBox);
    const clickBoxObj = gameboardMapper.getGameBoardClickBox(clickBox);
    surroundingBoxesKeys.forEach(data => {
      if ((clickBoxObj.surroundingBoxes[data] === null) && (clickBoxObj.borders[data.replace("Box", "")] === null)) {
        edgeBox.hasEdgeBox = true;
        edgeBox.clickSide = data.replace("Box", "");
      }
    })
    return edgeBox;
  },
  getLineBetweenBoxes: (clickBox, selectedBox) => {
    let selectedSide = null;
    gameboardMapper.getSurroundingBoxesKeys(clickBox).forEach(data => {
      const number = (gameboardMapper.getSurroundingBoxesInfo(clickBox, data)) ? gameboardMapper.getSurroundingBoxesInfo(clickBox, data).boxNumber : null;
      if (selectedBox === `box${number}`) {
        selectedSide = data
      }
    });
    return selectedSide;
  },
  getLessThanOneBorderNonConnectedSurroundingBoxes: (clickBox) => {
    const surroundingBoxes = task.getSurroundingBoxes(clickBox);
    const matchingBoxes = [];
    surroundingBoxes.map(data => {
      const borders = boxInfo.getBorderCount(`box${data}`);
      if (borders <= 1) matchingBoxes.push(`box${data}`);
    })
    return matchingBoxes;
  },
  getSurroundingBoxes: (clickBox) => {
    const surroundingBoxes = [];
    gameboardMapper.getSurroundingBoxesKeys(clickBox).forEach(data => {
      if (gameboardMapper.getSurroundingBoxesInfo(clickBox, data)) surroundingBoxes.push(gameboardMapper.getSurroundingBoxesInfo(clickBox, data).boxNumber);
    })
    return surroundingBoxes.filter(data => data);
  },
  getRandomIndexInArray: (boxArray) => {
    return boxArray[Math.floor(Math.random() * boxArray.length)];
  },
  subtractOneBorderFrom: (box) => {
    const clickedBorders = boxInfo.getClickedBorders(box);
    const borderToRemove = task.getRandomIndexInArray(clickedBorders);
    task.clickOnBorder(box, borderToRemove, true, true);
  },
  addOneBorderTo: (box) => {
    const unclickedBorders = boxInfo.getUnclickedBorders(box);
    const borderToAdd = task.getRandomIndexInArray(unclickedBorders);
    task.clickOnBorder(box, borderToAdd, true);
  }
}

const gameboardMapper = {
  getGameBoardClickBox: (clickBox) => {
    return gameBoard[clickBox];
  },
  getSurroundingBoxesInfo: (clickBox, boxSide) => {
    return gameBoard[clickBox].surroundingBoxes[boxSide]
  },
  getSurroundingBoxesKeys: (clickBox) => {
    return Object.keys(gameboardMapper.getGameBoardClickBox(clickBox).surroundingBoxes);
  }
}

const boxInfo = {
  getBorderCount: (box) => {
    const borders = gameBoard[box].borders;
    let count = 0;
    Object.keys(borders).forEach(data => {
      if (borders[data]) count++;
    })
    return count;
  },
  getAllBoxClasses: (box) => {
    const classesToAdd = ["box"];
    if (gameBoard[box].borders.top) classesToAdd.push("borderTop");
    if (gameBoard[box].borders.right) classesToAdd.push("borderRight");
    if (gameBoard[box].borders.bottom) classesToAdd.push("borderBottom");
    if (gameBoard[box].borders.left) classesToAdd.push("borderLeft");
    if (gameBoard[box].whoScored) classesToAdd.push(gameBoard[box].whoScored);
    classesToAdd.push("flexRow");
    classesToAdd.push(box);
    return classesToAdd;
  },
  getNumberText: (box, div) => {
    let numberOfSides = 0;
    if (gameBoard[box].borders.top) numberOfSides++;
    if (gameBoard[box].borders.right) numberOfSides++;
    if (gameBoard[box].borders.bottom) numberOfSides++;
    if (gameBoard[box].borders.left) numberOfSides++;
    $(div).html(`<p>${numberOfSides}</p>`)
  },
  getUnclickedBorders: (box) => {
    const bordersArray = [];
    const borders = gameBoard[box].borders;
    Object.keys(borders).forEach(data => {
      if (!borders[data]) bordersArray.push(data);
    })
    return bordersArray;
  },
  getClickedBorders: (box) => {
    const bordersArray = [];
    const borders = gameBoard[box].borders;
    Object.keys(borders).forEach(data => {
      if (borders[data]) bordersArray.push(data);
    })
    return bordersArray;
  }
}

task.populateBoard(); // populate the gameboard into the UI
task.startTimer();