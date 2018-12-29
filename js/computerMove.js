const computerMove = {
  makeComputerMove: () => {
    if (!computerCanMove) return null
    gameTimer.stopTimer();
    // logic to make computer move
    setTimeout(() => { // makes the computer delay before making a move
      computerMove.makeMoveInSafeBox()
    }, 100);
  },
  makeMoveInSafeBox: () => { // make a computer move that doesn't allow opponent the score
    if (threeBorderBoxes.length !== 0) computerMove.getAFreeBox();
    else if (noBorders.length !== 0) computerMove.clickInANoBorderBox();
    else if (oneBorderBoxes.length !== 0) computerMove.clickInAOneBorderBox();
    else if (twoBorderBoxes.length !== 0) computerMove.clickInATwoBorderBox();
    ui.populateBoard();
  },
  getAFreeBox: () => {
    const clickBox = task.getRandomIndexInArray(threeBorderBoxes);
    Object.keys(gameboardMapper.getGameBoardClickBox(clickBox).borders).forEach(data => {
      if (!gameboardMapper.getGameBoardClickBox(clickBox).borders[data]) {
        lineClickAction.clickOnBorder(clickBox, data);
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
      const oneOrLessBorderSurroundingBoxes = boxInfo.getLessThanOneBorderNonConnectedSurroundingBoxes(clickBox);
      // choose a random box of the potential boxes to click
      const selectedBox = task.getRandomIndexInArray(oneOrLessBorderSurroundingBoxes);
      // cache the line between the two boxes to use when clicking
      const lineBetweenBoxes = boxInfo.getLineBetweenBoxes(clickBox, selectedBox);
      // is the box on the edge of the gameboard and has no adjcent box
      const edgeBox = boxInfo.edgeBox(clickBox);
      // if the box is an edge box you can click the edge as a safe move
      if (edgeBox.hasEdgeBox) {
        keepGoing = false;
        lineClickAction.clickOnBorder(clickBox, edgeBox.clickSide);
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
        lineClickAction.clickOnBorder(clickBox, line);
      } else {
        // if not, rethink what kind of box we want to potentially click
        computerMove.makeMoveInSafeBox();
      }
    }
  },
  clickInAOneBorderBox: () => {
    const safeClickBoxWithSide = [];
    const oneBorder = [...oneBorderBoxes];
    oneBorder.forEach(box => {
      oneBorderBoxes.splice(oneBorderBoxes.indexOf(box), 1);
      const edgeBox = boxInfo.edgeBox(box);
      if (edgeBox.hasEdgeBox) { // task takes care of the corner cases by clicked its empty side
        safeClickBoxWithSide.push({
          clickBox: box,
          clickSide: edgeBox.clickSide
        });
      } else {
        const surroundingOnBorderBoxes = boxInfo.getSurroundingBoxes(box).filter(data => oneBorderBoxes.includes(`box${data}`));
        surroundingOnBorderBoxes.forEach(data => {
          const adjObj = boxInfo.isAdjacentBoxesConnected(box, `box${data}`);
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
      lineClickAction.clickOnBorder(clickBoxObj.clickBox, clickBoxObj.clickSide);
    } else {
      computerMove.makeMoveInSafeBox();
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
        const surroundingBoxes = boxInfo.getSurroundingBoxes(boxNumber);
        // filter for connected boxes
        const connectedBoxes = surroundingBoxes.filter(box => boxInfo.isAdjacentBoxesConnected(`box${box}`, boxNumber).isConnected);
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
    computerMove.chooseBoxToClickInEndGame(connectedBoxCombinations);
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
    // lineClickAction.clickOnBorder(boxToClick, lineClick, enterVirtualEnviroment);
    lineClickAction.clickOnBorder(boxToClick, lineClick);
  }
}