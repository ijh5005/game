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
  removeAllBorders: (box) => {
    // remove all four borders
    // debugger
    // gameBoard[box].isBrick = false;
    // const sidesToRemove = ["top", "right", "bottom", "left"]
    // for(let i = 0; i < 4; i++){
    //   helper.subtractOneBorderFrom(box, sidesToRemove[i]);
    // }
    gameBoard[box].isBrick = false;
    let counter = 0;
    animations.animate(1, "explosionImages", 9, box);
    const removeBorders = setInterval(() => {
      if(counter === 4){
        clearInterval(removeBorders)
      } else {
        helper.subtractOneBorderFrom(box);
        counter++;
      }
    }, 2)
  }
}