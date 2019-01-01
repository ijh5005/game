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
  },
  adjustBorderCountArrays: () => {
    boxInfo.clearBorderArrays();
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
    const surroundingBoxes = boxInfo.getSurroundingBoxes(clickBox);
    const matchingBoxes = [];
    surroundingBoxes.map(data => {
      const borders = boxInfo.getBorderCount(data);
      if (borders <= 1) matchingBoxes.push(data);
    })
    return matchingBoxes;
  },
  getSurroundingBoxes: (clickBox) => {
    const surroundingBoxes = [];
    gameboardMapper.getSurroundingBoxesKeys(clickBox).forEach(data => {
      if (gameboardMapper.getSurroundingBoxesInfo(clickBox, data)) surroundingBoxes.push(gameboardMapper.getSurroundingBoxesInfo(clickBox, data).boxNumber);
    })
    return surroundingBoxes.filter(data => data).map(box => `box${box}`);
  },
  getOneBorderConnectedSurroundingBoxes: (box) => {
    const oneBorderConnectedSurroundingBoxes = [];
    const connectedSurroundingBoxes = boxInfo.getSurroundingBoxes(box).filter(adjBox => boxInfo.isAdjacentBoxesConnected(box, adjBox).isConnected);
    connectedSurroundingBoxes.forEach(surBox => {
      if (boxInfo.getBorderCount(surBox) === 1) {
        oneBorderConnectedSurroundingBoxes.push(surBox);
      }
    });
    return oneBorderConnectedSurroundingBoxes;
  },
  getConnectedBoxes: (box) => {
    const connectedBoxes = [];
    const surroundingBoxes = boxInfo.getSurroundingBoxes(box);
    surroundingBoxes.forEach(surBox => {
      if (boxInfo.isAdjacentBoxesConnected(box, surBox).isConnected) {
        connectedBoxes.push(surBox)
      }
    })
    return connectedBoxes;
  },
  getLineToNotScorePoint: (box) => {
    // choose line not connected to a three line box
  }
}