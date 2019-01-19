const obj = {};

// right out the border and change the variables to print out the board
const size = 100;
const difference = 10;

const topRightCorner = 9;
const topLeftCorner = 0;
const bottomRightCorner = 99;
const bottomLeftCorner = 90;

const topSideRow = [1, 2, 3, 4, 5, 6, 7, 8];
const rightSideRow = [19, 29, 39, 49, 59, 69, 79, 89];
const bottomSideRow = [91, 92, 93, 94, 95, 96, 97, 98];
const leftSideRow = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < size; i++) {
  let addition = {
    borders: {
      top: null,
      right: null,
      bottom: null,
      left: null
    },
    surroundingBoxes: {
      topBox: {
        boxNumber: i - difference,
        isConnected: true,
        borders: null
      },
      rightBox: {
        boxNumber: i + 1,
        isConnected: true,
        borders: null
      },
      bottomBox: {
        boxNumber: i + difference,
        isConnected: true,
        borders: null
      },
      leftBox: {
        boxNumber: i - 1,
        isConnected: true,
        borders: null
      }
    }
  };

  if (i === topRightCorner) {
    addition.surroundingBoxes.topBox = null;
    addition.surroundingBoxes.rightBox = null;
  } else if (i === topLeftCorner) {
    addition.surroundingBoxes.topBox = null;
    addition.surroundingBoxes.leftBox = null;
  } else if (i === bottomRightCorner) {
    addition.surroundingBoxes.bottomBox = null;
    addition.surroundingBoxes.rightBox = null;
  } else if (i === bottomLeftCorner) {
    addition.surroundingBoxes.bottomBox = null;
    addition.surroundingBoxes.leftBox = null;
  } else if (topSideRow.includes(i)) {
    addition.surroundingBoxes.topBox = null;
  } else if (rightSideRow.includes(i)) {
    addition.surroundingBoxes.rightBox = null;
  } else if (bottomSideRow.includes(i)) {
    addition.surroundingBoxes.bottomBox = null;
  } else if (leftSideRow.includes(i)) {
    addition.surroundingBoxes.leftBox = null;
  }

  obj[`box${i}`] = addition;
}
console.log(JSON.stringify(obj))