const lineClickAction = {
  highlightClickedBorder: (offsetX, offsetY, boxNumber, board) => {
    const height = $(".box").height();
    const upperOutOfBoundsNumber = height - 20;
    const lowerOutOfBoundsNumber = 20;
    if (lineClickAction.isALineClick(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber)) { // check to see if a line is clicked
      const lineClicked = lineClickAction.getLineClicked(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber); // cache the clicked line
      const hasClickBorderPreviously = (gameBoard[boxNumber].borders[lineClicked] === true);
      if (!hasClickBorderPreviously) { // prevent multiple click to the same border
        lineClickAction.clickOnBorder(boxNumber, lineClicked);
      }
    } else if (helperButtonSelected) {
      helper.useHelper(boxNumber);
      helperButtonSelected = null;
    }
  },
  clickOnBorder: (boxNumber, lineClicked, helpUser = false, subtractBorder = false) => {
    turnNumber++;
    if (isFirstPlayerTurn) {
      gameTimer.incrementTimer();
    }
    const action = subtractBorder ? null : true;
    ui.removeScoreColorIfRemovingBorder(boxNumber, subtractBorder)
    gameBoard[boxNumber].borders[lineClicked] = action;
    gameScore.highlightBoxIfScored(boxNumber);
    let adjacentBox = null;
    let adjBoxNumber = null;
    const hasAdjacentBox = ((gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`] !== null) && (gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`] !== undefined));
    if (hasAdjacentBox) {
      adjacentBox = gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`].boxNumber;
      gameBoard[`box${adjacentBox}`].borders[complementBorder[`${lineClicked}`]] = action;
      gameScore.highlightBoxIfScored(`box${adjacentBox}`);
      adjBoxNumber = `box${adjacentBox}`;
      ui.removeScoreColorIfRemovingBorder(`box${adjacentBox}`, subtractBorder);
    }
    ui.closeTheBoxConnection({
      boxNumber,
      adjacentBox: adjBoxNumber,
      boxNumberClosedBorder: lineClicked,
      adjacentBoxClosedBorder: complementBorder[`${lineClicked}`]
    });
    const scoreParams = [boxNumber, `box${adjacentBox}`].filter(data => data !== "boxnull");
    gameScore.adjustScore(...scoreParams); // adjust the score
    if (!helpUser) {
      task.setTurnPlayer(); // set the turn player
    }
    task.isGameOver();
    ui.populateBoard(board);
    lineClickAction.changeLineColorOfLastClickedBox(boxNumber, lineClicked);
    (hasAdjacentBox) ? lineClickAction.changeLineColorOfLastClickedBox(adjBoxNumber, complementBorder[`${lineClicked}`], hasAdjacentBox): null;
  },
  changeLineColorOfLastClickedBox: (boxNumber, lineClicked, isAdjacentBox) => {
    setTimeout(() => {
      $(`.${boxNumber}`).addClass(`${lineClicked}LineClicked`);
      setTimeout(() => {
        $(".box").removeClass("topLineClicked");
        $(".box").removeClass("rightLineClicked");
        $(".box").removeClass("bottomLineClicked");
        $(".box").removeClass("leftLineClicked");
      }, 800)
    })
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
  removeBorders: (box, borders) => {
    borders.forEach(border => {
      gameBoard[box].borders[border] = null;
    });
    ui.populateBoard();
  },
}