const obj = {};
for (let i = 0; i < 36; i++) {
  obj[`box${i}`] = {
    borders: {
      top: null,
      right: null,
      bottom: null,
      left: null
    },
    surroundingBoxes: {
      topBox: {
        boxNumber: i - 6,
        isConnected: true,
        borders: null
      },
      rightBox: {
        boxNumber: i + 1,
        isConnected: true,
        borders: null
      },
      bottomBox: {
        boxNumber: i + 6,
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
}
console.log(JSON.stringify(obj))