const computerMove = {
  makeComputerMove: () => {
    gameTimer.stopTimer();
    // logic to make computer move
    setTimeout(() => { // makes the computer delay before making a move
      const existsTwoBorderBoxes = twoBorderBoxes.length !== 0;
      const noThreeBorderBoxes = !(threeBorderBoxes.length > 0);
      const at20percentMark = (turnNumber / calculatedTotalTurns) > 0.2;
      if (existsTwoBorderBoxes && noThreeBorderBoxes && computerMove.giveAWayABox() && at20percentMark) {
        computerMove.clickInATwoBorderBox();
        ui.populateBoard();
      } else {
        computerMove.makeMoveInSafeBox();
      }
    }, 500);
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

    let clickBoxInfo = computerMove.shouldLetHaveBox();

    Object.keys(gameboardMapper.getGameBoardClickBox(clickBox).borders).forEach(data => {
      if (!gameboardMapper.getGameBoardClickBox(clickBox).borders[data]) {
        if (clickBoxInfo && conserveMoveUsed) {
          debugger
          lineClickAction.clickOnBorder(clickBoxInfo.boxToClick, clickBoxInfo.sideToClick)
        } else {
          lineClickAction.clickOnBorder(clickBox, data);
        }
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
        // if the box is an edge box you can click the edge as a safe move
        if (edgeBox.hasEdgeBox) {
          keepGoing = false;
          lineClickAction.clickOnBorder(clickBox, edgeBox.clickSide);
          break;
        }
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
        const surroundingOnBorderBoxes = boxInfo.getSurroundingBoxes(box).filter(data => oneBorderBoxes.includes(data));
        surroundingOnBorderBoxes.forEach(data => {
          const adjObj = boxInfo.isAdjacentBoxesConnected(box, data);
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
    const connectedBoxCombinations = computerMove.getPathBoxes();
    // choose a box to click
    computerMove.chooseBoxToClickInEndGame(connectedBoxCombinations);
  },
  getPathBoxes: () => {
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
        const connectedBoxes = surroundingBoxes.filter(box => boxInfo.isAdjacentBoxesConnected(box, boxNumber).isConnected);
        // filter out for 2 line boxes
        const filterBoxesForTwoLineConnectedBoxes = connectedBoxes.filter(data => twoLineBoxes.includes(data)).map(box => box);
        filterBoxesForTwoLineConnectedBoxes.forEach(box => {
          if (!allConnectedBoxes.includes(box)) recordConnectedBoxes(box);
        })
      }
      if (!calledFunction && inspectingBox) {
        calledFunction = true;
        recordConnectedBoxes(inspectingBox);
      }
      connectedBoxCombinations.push([...allConnectedBoxes])
      allConnectedBoxes.length = 0;
      // stop the while loop once all twoLineBoxes are inspected
      if (inspectedBoxes.length === numberOfBoxesInspecting) keepGoing = false;
    }
    return connectedBoxCombinations;
  },
  chooseBoxToClickInEndGame: (multiScoreBoxPaths) => {
    const pathsToClickABox = multiScoreBoxPaths.sort((a, b) => a.length - b.length);
    const pathObj = computerMove.checkForPotentialExtendedPaths(pathsToClickABox[0], multiScoreBoxPaths);
    if (pathObj.hasExtendedPaths && extendedPathBoxes.includes(pathObj.extendBox)) {
      computerMove.chooseBoxToClickInEndGame(pathObj.remainingPathsToCheck);
    } else {
      const boxToClick = task.getRandomIndexInArray(pathsToClickABox[0]);
      let lineClick;
      Object.keys(gameboardMapper.getGameBoardClickBox(boxToClick).borders).forEach(data => {
        if (gameboardMapper.getGameBoardClickBox(boxToClick).borders[data] === null) {
          lineClick = data;
        }
      });
      lineClickAction.clickOnBorder(boxToClick, lineClick);
    }
  },
  checkForPotentialExtendedPaths: (path, multiScoreBoxPaths) => {
    let hasExtendedPaths = false;
    let boxToAdd;
    // check if there are any connected box with one border
    const oneBorderBoxesConnectedToAllBoxesInPath = [];
    path.forEach(box => {
      const oneBorderConnectedSurroundingBoxes = boxInfo.getOneBorderConnectedSurroundingBoxes(box);
      const hasOneBorderConnectedSurroundingBoxes = (oneBorderConnectedSurroundingBoxes.length > 0);
      const accountedFor = oneBorderBoxesConnectedToAllBoxesInPath.includes(oneBorderConnectedSurroundingBoxes[0]);
      (hasOneBorderConnectedSurroundingBoxes) ? oneBorderBoxesConnectedToAllBoxesInPath.push(oneBorderConnectedSurroundingBoxes[0]): null;
      if (hasOneBorderConnectedSurroundingBoxes && accountedFor) {
        boxToAdd = oneBorderConnectedSurroundingBoxes[0];
        hasExtendedPaths = true;
      }
    });

    let remainingPathsToCheck;
    if (boxToAdd) {
      const indexOfPath = multiScoreBoxPaths.indexOf(path);
      // count that box in its path and any path connected to that box
      path.push(boxToAdd);
      const connectedBoxesNotInPath = boxInfo.getConnectedBoxes(boxToAdd).filter(box => !path.includes(box));
      let pathToCombine = [];
      const remainingPaths = multiScoreBoxPaths.map((paths, index) => {
        // if the connected boxes is in a path combine the path with the paths being checked
        // this means that they are indirectly connected
        if (index !== indexOfPath) {
          if (paths.includes(connectedBoxesNotInPath[0])) {
            pathToCombine = [...paths, ...path]
          }
          return paths;
        }
        return null;
      })
      remainingPathsToCheck = remainingPaths.map(paths => {
        return (!paths) ? pathToCombine : paths;
      });
      extendedPathBoxes.push(boxToAdd);
    }

    // replace the path in the array with newly created path
    // retry the path selection process
    return {
      hasExtendedPaths,
      remainingPathsToCheck,
      extendBox: boxToAdd
    };
  },
  shouldLetHaveBox: () => {
    let onePathHasTwoBoxes = false;
    const pathsToClickABox = computerMove.getPathBoxes();
    if (pathsToClickABox.length === 2) {
      debugger
      pathsToClickABox.forEach(path => {
        if (path.length === 1) {
          onePathHasTwoBoxes = !onePathHasTwoBoxes;
          conserveMoveUsed = true;
        }
      })
    }

    const clickBoxInfo = onePathHasTwoBoxes ? computerMove.chooseLineAndBoxThatDoesNotScore(pathsToClickABox, onePathHasTwoBoxes) : null;
    return clickBoxInfo;
  },
  chooseLineAndBoxThatDoesNotScore: (pathsToClickABox, onePathHasTwoBoxes) => {
    let sideToClick;
    const orderedPaths = pathsToClickABox.sort((a, b) => a.length - b.length);
    const boxToClick = orderedPaths[0][0];
    const boxHasTwoBorders = boxInfo.getBorderCount(boxToClick);
    if (boxHasTwoBorders) {
      // click the edge box
      sideToClick = boxInfo.edgeBox(boxToClick).clickSide;
    } else {
      // take the box
      onePathHasTwoBoxes = false;
    }
    return {
      boxToClick,
      sideToClick
    };
  },
  giveAWayABox: () => {
    return (Math.random() < chanceToGiveAWayPoint);
  }
}