const ui = {
  populateBoard: () => { // populate the gameboard into the UI
    document.getElementById("board").innerHTML = ""; // clear the board before rendering it
    for (let box in gameBoard) {
      const gridBox = document.createElement("div");
      gridBox.classList.add(...boxInfo.getAllBoxClasses(box));
      // boxInfo.getNumberText(box, gridBox);
      $(gridBox).html(`<div class="explosionBox ${box}Explosion"></div>`)
      gridBox.addEventListener("click", (e) => { // add a click event to the box click on borders
        if (!isFirstPlayerTurn) return null; // prevent out of turn clicks
        lineClickAction.highlightClickedBorder(e.offsetX, e.offsetY, box, board);
      });
      if(gameBoard[box].isBrick){
        gridBox.classList.add("brick");
      }
      $("#board").append(gridBox); // add the box to the game board
    }
    gameScore.setScores();
    boxInfo.adjustBorderCountArrays(); // add boxes with one border to the oneBorderBoxes array, etc...
  },
  removeScoreColorIfRemovingBorder: (box, subtractBorder) => {
    if (subtractBorder) {
      gameBoard[box].whoScored = null;
      $(`.${box}`).removeClass("firstPlayerScored").removeClass("secondPlayerScored");
    }
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
  }
}