const helper = {
  useHelper: (box) => {
    if (helperButtonSelected === "minus") {
      // does the box have at least one line highlighted
      if (boxInfo.getBorderCount(box) > 0) {
        // choose a random line in the box to fill in
        helper.subtractOneBorderFrom(box);
      } else {
        console.log("can't select box to minus");
      }
    } else if (helperButtonSelected === "plus") {
      // does the box have less than four lines highlighted
      if (boxInfo.getBorderCount(box) < 4) {
        // choose a random line in the box to remove
        helper.addOneBorderTo(box);
      } else {
        console.log("can't select box to add");
      }
    }
  },
  subtractOneBorderFrom: (box) => {
    const clickedBorders = boxInfo.getClickedBorders(box);
    const borderToRemove = task.getRandomIndexInArray(clickedBorders);
    lineClickAction.clickOnBorder(box, borderToRemove, true, true);
  },
  addOneBorderTo: (box) => {
    const unclickedBorders = boxInfo.getUnclickedBorders(box);
    const borderToAdd = task.getRandomIndexInArray(unclickedBorders);
    lineClickAction.clickOnBorder(box, borderToAdd, true);
  },
  hasTwoInArray: (array, arrayToCheckIn) => {
    let numberInside = 0;
    array.forEach(arr => {
      if (arrayToCheckIn.includes(arr)) {
        numberInside++
      }
    })
    return (numberInside === 2);
  },
  removedDoublesFromArray: (arr) => {
    const noDublicates = [];
    arr.forEach(item => {
      if (!noDublicates.includes(item)) {
        noDublicates.push(item);
      }
    })
    return noDublicates;
  },
  mediumExplosion: (box) => {
    // remove all four borders
    gameBoard[box].isMediumExplosion = false;
    let counter = 0;
    const removeBorders = setInterval(() => {
      if (counter === 4) {
        clearInterval(removeBorders)
      } else {
        helper.subtractOneBorderFrom(box);
        counter++;
      }
    });

    $(`.${box}Explosion`).removeClass("hideExplosion").attr("src", "./gifs/smoke.gif");
    setTimeout(() => {
      $(`.${box}Explosion`).addClass("hideExplosion");
    }, 80 * 9);

    const surroundingBoxes = boxInfo.getSurroundingBoxes(box);
    surroundingBoxes.forEach(surroundingBox => {
      $(`.${surroundingBox}Explosion`).removeClass("hideExplosion").attr("src", "./gifs/smoke.gif");
      setTimeout(() => {
        $(`.${surroundingBox}Explosion`).addClass("hideExplosion");
      }, 80 * 9);
    })
  },
  largerExplosion: (box) => {
    gameBoard[box].isLargeExplosion = false;

    const boxNumber = parseInt(box.replace("box", ""));

    let topRightBoxNumber = boxNumber - (rowLength - 1);
    let topLeftBoxNumber = boxNumber - (rowLength + 1);
    let bottomRightBoxNumber = boxNumber + (rowLength + 1);
    let bottomLeftBoxNumber = boxNumber + (rowLength - 1);

    let topBox = boxNumber - rowLength;
    let leftBox = boxNumber - 1;
    let bottomBox = boxNumber + rowLength;
    let rightBox = boxNumber + 1;

    const bordersToRemove = [{
        box: `box${boxNumber}`,
        borders: ["top", "right", "bottom", "left"]
      },
      {
        box: `box${topRightBoxNumber}`,
        borders: ["bottom", "left"]
      },
      {
        box: `box${topLeftBoxNumber}`,
        borders: ["right", "bottom"]
      },
      {
        box: `box${bottomRightBoxNumber}`,
        borders: ["top", "left"]
      },
      {
        box: `box${bottomLeftBoxNumber}`,
        borders: ["top", "right"]
      },
      {
        box: `box${topBox}`,
        borders: ["right", "bottom", "left"]
      },
      {
        box: `box${leftBox}`,
        borders: ["top", "right", "bottom"]
      },
      {
        box: `box${bottomBox}`,
        borders: ["top", "right", "left"]
      },
      {
        box: `box${rightBox}`,
        borders: ["top", "bottom", "left"]
      },
    ]




    if (gameBoard[box].isTopSideRow || !gameBoard[box]) {
      topBox = null;
      topRightBoxNumber = null;
      topLeftBoxNumber = null;
    } else if (gameBoard[box].isRightSideRow || !gameBoard[box]) {
      rightBox = null;
      topRightBoxNumber = null;
      bottomRightBoxNumber = null;
    } else if (gameBoard[box].isBottomSideRow || !gameBoard[box]) {
      bottomBox = null;
      bottomRightBoxNumber = null;
      bottomLeftBoxNumber = null;
    } else if (gameBoard[box].isLeftSideRow || !gameBoard[box]) {
      leftBox = null;
      topLeftBoxNumber = null;
      bottomLeftBoxNumber = null;
    } else if (gameBoard[box].isTopLeftCornerBox || !gameBoard[box]) {
      topBox = null;
      leftBox = null;
      topLeftBoxNumber = null;
    } else if (gameBoard[box].isTopRightCornerBox || !gameBoard[box]) {
      topBox = null;
      rightBox = null;
      topRightBoxNumber = null;
      topLeftBoxNumber = null;
      bottomRightBoxNumber = null;
    } else if (gameBoard[box].isBottomLeftCornerBox || !gameBoard[box]) {
      bottomBox = null;
      leftBox = null;
      topLeftBoxNumber = null;
      bottomRightBoxNumber = null;
      bottomLeftBoxNumber = null;
    } else if (gameBoard[box].isBottomRightCornerBox || !gameBoard[box]) {
      bottomBox = null;
      rightBox = null;
      topRightBoxNumber = null;
      bottomRightBoxNumber = null;
      bottomLeftBoxNumber = null;
    }



    bordersToRemove.forEach(item => {
      if (item.box) {
        lineClickAction.removeBorders(item.box, item.borders);
        ui.removeScoreColorIfRemovingBorder(item.box, true);
        $(`.${item.box}Explosion`).removeClass("hideExplosion").attr("src", "./gifs/largeExplosion.gif");
        setTimeout(() => {
          $(`.${item.box}Explosion`).addClass("hideExplosion");
        }, 80 * 8);
      }
    });

  }
}