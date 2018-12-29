const gameScore = {
  youLose: () => {
    console.log("you lose")
  },
  setScores: () => {
    document.getElementById("playerOneScore").innerText = playerOneScore;
    document.getElementById("playerTwoScore").innerText = playerTwoScore;
  },
  highlightBoxIfScored: (boxNumber) => {
    if (boxInfo.getBorderCount(boxNumber) === 4) {
      gameBoard[boxNumber].whoScored = isFirstPlayerTurn ? "firstPlayerScored" : "secondPlayerScored";
    }
  },
  adjustScore: (boxNumber, adjacentBoxNumber) => {
    const score = (box) => {
      if (!gameScore.hasScored(box)) return null; // check to see if player scored a point
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
}