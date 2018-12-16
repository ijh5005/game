'use strict';

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

let playerOneScore = 0;
let playerTwoScore = 0;
const noBorders = [];
const oneBorderBoxes = [];
const twoBorderBoxes = [];
const threeBorderBoxes = [];

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$rootScope', '$interval', '$timeout', 'task', function($scope, $rootScope, $interval, $timeout, task) {
  $rootScope.gameBoardSize = "thirtysix"; // this will be a variable for the user to select
  $rootScope.gameBoard = gameBoardMapper[$scope.gameBoardSize]; // map the selected gameBoard with its corresponding object
  $rootScope.hasScored = false;
  $rootScope.isFirstPlayerTurn = true;
  $rootScope.totalPointsScored = 0;
  $rootScope.isPlayingComputer = true; // indicates if you are playing the computer
  task.populateBoard(); // populate the gameboard into the UI
  // debuging tools
  $rootScope.computerCanMove = true;
  $scope.toggleComputer = () => {
    $rootScope.computerCanMove = !$rootScope.computerCanMove;
  }
}]);

app.service('task', function($rootScope, $interval, $timeout, gameboardMapper, boxInfo) {
  this.populateBoard = () => { // populate the gameboard into the UI
    document.getElementById("board").innerHTML = ""; // clear the board before rendering it
    for (let box in $rootScope.gameBoard) {
      const gridBox = document.createElement("div");
      gridBox.classList.add(...boxInfo.getAllBoxClasses(box));
      gridBox.addEventListener("click", (e) => { // add a click event to the box click on borders
        if (!$rootScope.isFirstPlayerTurn) return null; // prevent out of turn clicks
        this.highlightClickedBorder(e.offsetX, e.offsetY, box, board);
      });
      // this.buildCube(div);
      $("#board").append(gridBox); // add the box to the game board
    }
    this.setScores();
    this.adjustBorderCountArrays(); // add boxes with one border to the oneBorderBoxes array, etc...
  };
  this.buildCube = (cubeContainer) => {
    cubeContainer.classList.add("cubeContainer");

    const cube = document.createElement("div");
    cube.classList.add("cube");

    const sides = ["front", "back", "left", "right", "top", "bottom"];
    sides.forEach(cubeSide => {
      const cubeChild = document.createElement("div");
      cubeChild.classList.add(cubeSide);
      cubeChild.classList.add("flexRow");
      cubeChild.innerText = cubeSide;
      cube.append(cubeChild);
    })

    return cubeContainer.append(cube);
  }
  this.setScores = () => {
    document.getElementById("playerOneScore").innerText = playerOneScore;
    document.getElementById("playerTwoScore").innerText = playerTwoScore;
  }
  this.highlightClickedBorder = (offsetX, offsetY, boxNumber, board) => {
    const height = $(".box").height();
    const upperOutOfBoundsNumber = height - 15;
    const lowerOutOfBoundsNumber = 15;
    if (this.isALineClick(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber)) { // check to see if a line is clicked
      const lineClicked = this.getLineClicked(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber); // cache the clicked line
      const hasClickBorderPreviously = ($rootScope.gameBoard[boxNumber].borders[lineClicked] === true);
      if (!hasClickBorderPreviously) { // prevent multiple click to the same border
        this.clickOnBorder(boxNumber, lineClicked);
      }
    }
  }
  this.clickOnBorder = (boxNumber, lineClicked) => {
    // if (enterVirtualEnviroment) {
    //   debugger
    //   const gameBoard = {
    //     $rootScope.gameBoard[boxNumber]
    //   }
    //   creat obj
    //   [{
    //     boxClickArray: [...],
    //     numberOfBoxesGiven: [...].length,
    //     hasResetBoxesGiven: false
    //   }]
    //   choose line to click
    //   make of copy of gameBoard
    //   fill in all boxes in numberOfBoxesGiven
    //   if there are 3 line boxes created
    //     change numberOfBoxesGiven to numberOfBoxesGiven + lengthOfPathArrayConnected
    //     set hasResetBoxesGiven to true
    //   else
    //     do the boxes click
    //   }]
    // }
    $rootScope.gameBoard[boxNumber].borders[lineClicked] = true;
    this.highlightBoxIfScored(boxNumber);
    let adjacentBox = null;
    let adjBoxNumber = null;
    const hasAdjacentBox = ($rootScope.gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`] !== null);
    if (hasAdjacentBox) {
      adjacentBox = $rootScope.gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`].boxNumber;
      $rootScope.gameBoard[`box${adjacentBox}`].borders[complementBorder[`${lineClicked}`]] = true;
      this.highlightBoxIfScored(`box${adjacentBox}`);
      adjBoxNumber = `box${adjacentBox}`;
    }
    this.closeTheBoxConnection({
      boxNumber,
      adjacentBox: adjBoxNumber,
      boxNumberClosedBorder: lineClicked,
      adjacentBoxClosedBorder: complementBorder[`${lineClicked}`]
    });
    const scoreParams = [boxNumber, `box${adjacentBox}`].filter(data => data !== "boxnull");
    this.adjustScore(...scoreParams); // adjust the score
    this.setTurnPlayer(); // set the turn player
    this.isGameOver();
    this.populateBoard(board);
  }
  this.highlightBoxIfScored = (boxNumber) => {
    if (boxInfo.getBorderCount(gameboardMapper.getBorderObj(boxNumber)) === 4) {
      $rootScope.gameBoard[boxNumber].whoScored = $rootScope.isFirstPlayerTurn ? "firstPlayerScored" : "secondPlayerScored";
    }
  }
  this.isALineClick = (offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber) => {
    const inUpperOutOfBounds = (offsetX > upperOutOfBoundsNumber) || (offsetY > upperOutOfBoundsNumber);
    const inLowerOutOfBounds = (offsetX < lowerOutOfBoundsNumber) || (offsetY < lowerOutOfBoundsNumber);
    const inTopLeftCorner = (offsetX < lowerOutOfBoundsNumber) && (offsetY < lowerOutOfBoundsNumber);
    const inBottomLeftCorner = (offsetX < lowerOutOfBoundsNumber) && (offsetY > upperOutOfBoundsNumber);
    const inTopRightCorner = (offsetX > upperOutOfBoundsNumber) && (offsetY < lowerOutOfBoundsNumber);
    const inBottomRightCorner = (offsetX > upperOutOfBoundsNumber) && (offsetY > upperOutOfBoundsNumber);
    const hasClickedACorner = (inTopLeftCorner || inBottomLeftCorner || inTopRightCorner || inBottomRightCorner);
    return (inUpperOutOfBounds || inLowerOutOfBounds) && !hasClickedACorner;
  }
  this.getLineClicked = (offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber) => {
    if (offsetX > upperOutOfBoundsNumber) return "right";
    if (offsetX < lowerOutOfBoundsNumber) return "left";
    if (offsetY > upperOutOfBoundsNumber) return "bottom";
    if (offsetY < lowerOutOfBoundsNumber) return "top";
  }
  this.closeTheBoxConnection = (closeTheBoxConnectionParams) => {
    const {
      boxNumber,
      adjacentBox,
      boxNumberClosedBorder,
      adjacentBoxClosedBorder
    } = closeTheBoxConnectionParams;
    if ($rootScope.gameBoard[boxNumber].surroundingBoxes[`${boxNumberClosedBorder}Box`]) $rootScope.gameBoard[boxNumber].surroundingBoxes[`${boxNumberClosedBorder}Box`].isConnected = false;
    if (adjacentBox && $rootScope.gameBoard[adjacentBox].surroundingBoxes[`${adjacentBoxClosedBorder}Box`]) $rootScope.gameBoard[adjacentBox].surroundingBoxes[`${adjacentBoxClosedBorder}Box`].isConnected = false;
  }
  this.adjustScore = (boxNumber, adjacentBoxNumber) => {
    const score = (box) => {
      if (!this.hasScored(box)) return null; // check to see if player scored a point
      ($rootScope.isFirstPlayerTurn) ? playerOneScore++ : playerTwoScore++;
      $rootScope.hasScored = true;
      $rootScope.totalPointsScored++;
    }
    if (boxNumber) score(boxNumber);
    if (adjacentBoxNumber) score(adjacentBoxNumber);
  }
  this.hasScored = (boxNumber) => {
    const isTopClicked = $rootScope.gameBoard[boxNumber].borders.top;
    const isRightClicked = $rootScope.gameBoard[boxNumber].borders.right;
    const isBottomClicked = $rootScope.gameBoard[boxNumber].borders.bottom;
    const isLeftClicked = $rootScope.gameBoard[boxNumber].borders.left;
    return (isTopClicked && isRightClicked && isBottomClicked && isLeftClicked);
  }
  this.setTurnPlayer = () => {
    $rootScope.isFirstPlayerTurn = ($rootScope.hasScored) ? $rootScope.isFirstPlayerTurn : !$rootScope.isFirstPlayerTurn;
    $rootScope.hasScored = false;
    if ($rootScope.isPlayingComputer && !$rootScope.isFirstPlayerTurn) { // make the computer move
      this.makeComputerMove();
    }
  }
  this.isGameOver = () => {
    if ($rootScope.totalPointsScored === totalPointsToScore[$rootScope.gameBoardSize]) console.log("game complete")
  }
  this.adjustBorderCountArrays = () => {
    this.clearBorderArrays();
    for (let box in $rootScope.gameBoard) {
      const borderCount = boxInfo.getBorderCount($rootScope.gameBoard[box].borders);
      if (borderCount === 0) noBorders.push(box);
      else if (borderCount === 1) oneBorderBoxes.push(box);
      else if (borderCount === 2) twoBorderBoxes.push(box)
      else if (borderCount === 3) threeBorderBoxes.push(box);
    }
  }
  this.clearBorderArrays = () => {
    noBorders.length = 0;
    oneBorderBoxes.length = 0;
    twoBorderBoxes.length = 0
    threeBorderBoxes.length = 0;
  }
  this.makeComputerMove = () => {
    if (!$rootScope.computerCanMove) return null
    // logic to make computer move
    $timeout(() => { // makes the computer delay before making a move
      this.makeMoveInSafeBox()
    }, 100);
  }
  this.makeMoveInSafeBox = () => { // make a computer move that doesn't allow opponent the score
    if (threeBorderBoxes.length !== 0) this.getAFreeBox();
    else if (noBorders.length !== 0) this.clickInANoBorderBox();
    else if (oneBorderBoxes.length !== 0) this.clickInAOneBorderBox();
    else if (twoBorderBoxes.length !== 0) this.clickInATwoBorderBox();
    this.populateBoard();
  }
  this.getAFreeBox = () => {
    const clickBox = this.getRandomIndexInArray(threeBorderBoxes);
    Object.keys(gameboardMapper.getGameBoardClickBox(clickBox).borders).forEach(data => {
      if (!gameboardMapper.getGameBoardClickBox(clickBox).borders[data]) {
        this.clickOnBorder(clickBox, data);
      }
    })
  }
  this.clickInANoBorderBox = () => {
    let keepGoing = true;
    while (keepGoing) {
      // choose a randon box in the array containing box with no border
      const clickBox = this.getRandomIndexInArray(noBorders);
      //remove that box from that array to avoid checking it multiple times
      noBorders.splice(noBorders.indexOf(clickBox), 1);
      // get the boxes around it that only has one or less borders already selected
      const oneOrLessBorderSurroundingBoxes = this.getLessThanOneBorderNonConnectedSurroundingBoxes(clickBox);
      // choose a random box of the potential boxes to click
      const selectedBox = this.getRandomIndexInArray(oneOrLessBorderSurroundingBoxes);
      // cache the line between the two boxes to use when clicking
      const lineBetweenBoxes = this.getLineBetweenBoxes(clickBox, selectedBox);
      // is the box on the edge of the gameboard and has no adjcent box
      const edgeBox = this.edgeBox(clickBox);
      // if the box is an edge box you can click the edge as a safe move
      if (edgeBox.hasEdgeBox) {
        keepGoing = false;
        this.clickOnBorder(clickBox, edgeBox.clickSide);
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
        this.clickOnBorder(clickBox, line);
      } else {
        // if not, rethink what kind of box we want to potentially click
        this.makeMoveInSafeBox();
      }
    }
  }
  this.clickInAOneBorderBox = () => {
    const safeClickBoxWithSide = [];
    const oneBorder = [...oneBorderBoxes];
    oneBorder.forEach(box => {
      oneBorderBoxes.splice(oneBorderBoxes.indexOf(box), 1);
      const edgeBox = this.edgeBox(box);
      if (edgeBox.hasEdgeBox) { // this takes care of the corner cases by clicked its empty side
        safeClickBoxWithSide.push({
          clickBox: box,
          clickSide: edgeBox.clickSide
        });
      } else {
        const surroundingOnBorderBoxes = this.getSurroundingBoxes(box).filter(data => oneBorderBoxes.includes(`box${data}`));
        surroundingOnBorderBoxes.forEach(data => {
          const adjObj = this.isAdjacentBoxesConnected(box, `box${data}`);
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
      const clickBoxObj = this.getRandomIndexInArray(safeClickBoxWithSide);
      this.clickOnBorder(clickBoxObj.clickBox, clickBoxObj.clickSide);
    } else {
      this.makeMoveInSafeBox();
    }
  }
  this.clickInATwoBorderBox = () => {
    // all possible connected box combinations
    const connectedBoxCombinations = [];
    // inspected boxes
    const inspectedBoxes = [];
    let allConnectedBoxes = [];
    // filter for two line boxes
    const twoLineBoxes = gameboardMapper.getGameBoardKeys().filter(boxNumber => boxInfo.getBorderCount(gameboardMapper.getBorderObj(boxNumber)) === 2);
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
        const surroundingBoxes = this.getSurroundingBoxes(boxNumber);
        // filter for connected boxes
        const connectedBoxes = surroundingBoxes.filter(box => this.isAdjacentBoxesConnected(`box${box}`, boxNumber).isConnected);
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
    this.chooseBoxToClickInEndGame(connectedBoxCombinations);
  }
  this.chooseBoxToClickInEndGame = (multiScoreBoxePaths) => {
    const pathToClickABox = multiScoreBoxePaths.sort((a, b) => a.length - b.length);
    const boxToClick = this.getRandomIndexInArray(pathToClickABox[0]);
    let lineClick;
    Object.keys(gameboardMapper.getGameBoardClickBox(boxToClick).borders).forEach(data => {
      if (gameboardMapper.getGameBoardClickBox(boxToClick).borders[data] === null) {
        lineClick = data;
      }
    });
    // after picking the line, test it out to see if it gives the same amount of boxes as its array length
    // const enterVirtualEnviroment = true;
    // this.clickOnBorder(boxToClick, lineClick, enterVirtualEnviroment);
    this.clickOnBorder(boxToClick, lineClick);
  }
  this.isAdjacentBoxesConnected = (box1, box2) => {
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
  }
  this.edgeBox = (clickBox) => { // return an edge box
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
  }
  this.getLineBetweenBoxes = (clickBox, selectedBox) => {
    let selectedSide = null;
    gameboardMapper.getSurroundingBoxesKeys(clickBox).forEach(data => {
      const number = (gameboardMapper.getSurroundingBoxesInfo(clickBox, data)) ? gameboardMapper.getSurroundingBoxesInfo(clickBox, data).boxNumber : null;
      if (selectedBox === `box${number}`) {
        selectedSide = data
      }
    });
    return selectedSide;
  }
  this.getLessThanOneBorderNonConnectedSurroundingBoxes = (clickBox) => {
    const surroundingBoxes = this.getSurroundingBoxes(clickBox);
    const matchingBoxes = [];
    surroundingBoxes.map(data => {
      const borders = boxInfo.getBorderCount($rootScope.gameBoard[`box${data}`].borders);
      if (borders <= 1) matchingBoxes.push(`box${data}`);
    })
    return matchingBoxes;
  }
  this.getSurroundingBoxes = (clickBox) => {
    const surroundingBoxes = [];
    gameboardMapper.getSurroundingBoxesKeys(clickBox).forEach(data => {
      if (gameboardMapper.getSurroundingBoxesInfo(clickBox, data)) surroundingBoxes.push(gameboardMapper.getSurroundingBoxesInfo(clickBox, data).boxNumber);
    })
    return surroundingBoxes.filter(data => data);
  }
  this.getRandomIndexInArray = (boxArray) => {
    return boxArray[Math.floor(Math.random() * boxArray.length)];
  }
});

app.service("gameboardMapper", function($rootScope, $interval, $timeout) {
  this.getGameBoardClickBox = (clickBox) => {
    return $rootScope.gameBoard[clickBox];
  }
  this.getBorderObj = (box) => {
    return $rootScope.gameBoard[box].borders
  }
  this.getSurroundingBoxesInfo = (clickBox, boxSide) => {
    return $rootScope.gameBoard[clickBox].surroundingBoxes[boxSide]
  }
  this.getGameBoardKeys = () => {
    return Object.keys($rootScope.gameBoard);
  }
  this.getSurroundingBoxesKeys = (clickBox) => {
    return Object.keys(this.getGameBoardClickBox(clickBox).surroundingBoxes);
  }
});

app.service("boxInfo", function($rootScope, $interval, $timeout) {
  this.getBorderCount = (borders) => {
    let count = 0;
    Object.keys(borders).forEach(data => {
      if (borders[data]) count++;
    })
    return count;
  }
  this.getAllBoxClasses = (box) => {
    const classesToAdd = ["box"];
    if ($rootScope.gameBoard[box].borders.top) classesToAdd.push("borderTop");
    if ($rootScope.gameBoard[box].borders.right) classesToAdd.push("borderRight");
    if ($rootScope.gameBoard[box].borders.bottom) classesToAdd.push("borderBottom");
    if ($rootScope.gameBoard[box].borders.left) classesToAdd.push("borderLeft");
    if ($rootScope.gameBoard[box].whoScored) classesToAdd.push($rootScope.gameBoard[box].whoScored)
    return classesToAdd;
  }
});