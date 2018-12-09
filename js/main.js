'use strict';
const gameBoardMapper = {
  // three by three board
  //  0   1   2
  //  3   4   5
  //  6   7   8
  nine: { // 3 by 3 gameboard
    box0: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 1,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 3,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box1: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 2,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 0,
          isConnected: true,
          borders: null
        }
      }
    },
    box2: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        borders: {
          top: null,
          right: null,
          bottom: null,
          left: null
        },
        topBox: null,
        rightBox: null,
        bottomBox: {
          boxNumber: 5,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 1,
          isConnected: true,
          borders: null
        }
      }
    },
    box3: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 0,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 6,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box4: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 1,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 5,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 3,
          isConnected: true,
          borders: null
        }
      }
    },
    box5: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 2,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: {
          boxNumber: 8,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        }
      }
    },
    box6: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 3,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: null
      }
    },
    box7: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 8,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: {
          boxNumber: 6,
          isConnected: true,
          borders: null
        }
      }
    },
    box8: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 5,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: null,
        leftBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        }
      }
    }
  },

  // six by six board
  //  0   1   2   3   4   5
  //  6   7   8   9   10  11
  //  12  13  14  15  16  17
  //  18  19  20  21  22  23
  //  24  25  26  27  28  29
  //  30  31  32  33  34  35
  thirtysix: { // 6 by 6 gameboard
    box0: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 1,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 6,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box1: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 2,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 0,
          isConnected: true,
          borders: null
        }
      }
    },
    box2: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 3,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 8,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 1,
          isConnected: true,
          borders: null
        }
      }
    },
    box3: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 9,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 2,
          isConnected: true,
          borders: null
        }
      }
    },
    box4: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: {
          boxNumber: 5,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 10,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 3,
          isConnected: true,
          borders: null
        }
      }
    },
    box5: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: null,
        rightBox: null,
        bottomBox: {
          boxNumber: 11,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        }
      }
    },
    box6: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 0,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 12,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box7: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 1,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 8,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 13,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 6,
          isConnected: true,
          borders: null
        }
      }
    },
    box8: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 2,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 9,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 14,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        }
      }
    },
    box9: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 3,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 10,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 15,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 8,
          isConnected: true,
          borders: null
        }
      }
    },
    box10: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 4,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 11,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 16,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 9,
          isConnected: true,
          borders: null
        }
      }
    },
    box11: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 5,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: {
          boxNumber: 17,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 10,
          isConnected: true,
          borders: null
        }
      }
    },
    box12: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 6,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 13,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 18,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box13: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 7,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 14,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 19,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 12,
          isConnected: true,
          borders: null
        }
      }
    },
    box14: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 8,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 15,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 20,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 13,
          isConnected: true,
          borders: null
        }
      }
    },
    box15: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 9,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 16,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 21,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 14,
          isConnected: true,
          borders: null
        }
      }
    },
    box16: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 10,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 17,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 22,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 15,
          isConnected: true,
          borders: null
        }
      }
    },
    box17: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 11,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: {
          boxNumber: 23,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 16,
          isConnected: true,
          borders: null
        }
      }
    },
    box18: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 12,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 19,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 24,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box19: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 13,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 20,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 25,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 18,
          isConnected: true,
          borders: null
        }
      }
    },
    box20: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 14,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 21,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 26,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 19,
          isConnected: true,
          borders: null
        }
      }
    },
    box21: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 15,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 22,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 27,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 20,
          isConnected: true,
          borders: null
        }
      }
    },
    box22: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 16,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 23,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 28,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 21,
          isConnected: true,
          borders: null
        }
      }
    },
    box23: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 17,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: {
          boxNumber: 29,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 22,
          isConnected: true,
          borders: null
        }
      }
    },
    box24: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 18,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 25,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 30,
          isConnected: true,
          borders: null
        },
        leftBox: null
      }
    },
    box25: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 19,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 26,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 31,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 24,
          isConnected: true,
          borders: null
        }
      }
    },
    box26: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 20,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 27,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 32,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 25,
          isConnected: true,
          borders: null
        }
      }
    },
    box27: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 21,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 28,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 33,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 26,
          isConnected: true,
          borders: null
        }
      }
    },
    box28: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 22,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 29,
          isConnected: true,
          borders: null
        },
        bottomBox: {
          boxNumber: 34,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 27,
          isConnected: true,
          borders: null
        }
      }
    },
    box29: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 23,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: {
          boxNumber: 35,
          isConnected: true,
          borders: null
        },
        leftBox: {
          boxNumber: 28,
          isConnected: true,
          borders: null
        }
      }
    },
    box30: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 24,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 31,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: null
      }
    },
    box31: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 25,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 32,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: {
          boxNumber: 30,
          isConnected: true,
          borders: null
        }
      }
    },
    box32: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 26,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 33,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: {
          boxNumber: 31,
          isConnected: true,
          borders: null
        }
      }
    },
    box33: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 27,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 34,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: {
          boxNumber: 32,
          isConnected: true,
          borders: null
        }
      }
    },
    box34: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 28,
          isConnected: true,
          borders: null
        },
        rightBox: {
          boxNumber: 35,
          isConnected: true,
          borders: null
        },
        bottomBox: null,
        leftBox: {
          boxNumber: 33,
          isConnected: true,
          borders: null
        }
      }
    },
    box35: {
      borders: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      surroundingBoxes: {
        topBox: {
          boxNumber: 29,
          isConnected: true,
          borders: null
        },
        rightBox: null,
        bottomBox: null,
        leftBox: {
          boxNumber: 34,
          isConnected: true,
          borders: null
        }
      }
    }
  }
}

const complementBoarder = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}
const totalPointsToScore = {
  nine: 9,
  thirtysix: 36
}
let playerOneScore = 0;
let playerTwoScore = 0;
const noBorders = [];
const oneBorderBoxes = [];
const twoBorderBoxes = [];
const threeBorderBoxes = [];

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$rootScope', '$interval', '$timeout', 'task', function($scope, $rootScope, $interval, $timeout, task) {
  $rootScope.gameBoardSize = "thirtysix"; // this will be a variable for the user to select
  $rootScope.gameBoard = gameBoardMapper[$scope.gameBoardSize]; // map the selected gameBoard with its corresponding object
  $rootScope.hasScored = false;
  $rootScope.isFirstPlayerTurn = true;
  $rootScope.totalPointsScored = 0;
  $rootScope.isPlayingComputer = true; // indicates if you are playing the computer
  task.populateBoard(); // populate the gameboard into the UI
  // debuging tools
  $rootScope.computerCanMove = true;
  $scope.toggleComputer = () => {
    $rootScope.computerCanMove = !$rootScope.computerCanMove;
  }
}]);

app.service('task', function($rootScope, $interval, $timeout) {
  this.populateBoard = () => { // populate the gameboard into the UI
    document.getElementById("board").innerHTML = ""; // clear the board before rendering it
    this.getGameBoardKeys().forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("box");
      div.classList.add($rootScope.gameBoard[data].whoScored);
      div.setAttribute("data", data);
      this.addBorders(div, data); // add any border classes to the box
      div.addEventListener("click", (e) => { // add a click event to the box click on borders
        if (!$rootScope.isFirstPlayerTurn && $rootScope.computerCanMove) return null // prevent out of turn clicks
        this.highlightClickedBorder(e.offsetX, e.offsetY, data, board);
      });
      // this.buildCube(div);
      $("#board").append(div); // add the box to the game board
    })
    this.setScores();
    this.adjustBorderCountArrays(); // add boxes with one border to the oneBorderBoxes array, etc...
  };
  this.buildCube = (cubeContainer) => {
    cubeContainer.classList.add("cubeContainer");

    const cube = document.createElement("div");
    cube.classList.add("cube");

    const sides = ["front", "back", "left", "right", "top", "bottom"];
    sides.forEach(cubeSide => {
      const cubeChild = document.createElement("div");
      cubeChild.classList.add(cubeSide);
      cubeChild.classList.add("flexRow");
      cubeChild.innerText = cubeSide;
      cube.append(cubeChild);
    })

    return cubeContainer.append(cube);
  }
  this.setScores = () => {
    document.getElementById("playerOneScore").innerText = playerOneScore;
    document.getElementById("playerTwoScore").innerText = playerTwoScore;
  }
  this.addBorders = (element, box) => {
    if ($rootScope.gameBoard[box].borders.top) element.classList.add("borderTop");
    if ($rootScope.gameBoard[box].borders.right) element.classList.add("borderRight");
    if ($rootScope.gameBoard[box].borders.bottom) element.classList.add("borderBottom");
    if ($rootScope.gameBoard[box].borders.left) element.classList.add("borderLeft");
  }
  this.highlightClickedBorder = (offsetX, offsetY, boxNumber, board) => {
    const height = $(".box").height();
    const upperOutOfBoundsNumber = height - 15;
    const lowerOutOfBoundsNumber = 15;
    if (this.isALineClick(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber)) { // check to see if a line is clicked
      const lineClicked = this.getLineClicked(offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber); // cache the clicked line
      const hasClickBorderPreviously = ($rootScope.gameBoard[boxNumber].borders[lineClicked] === true);
      if (!hasClickBorderPreviously) { // prevent multiple click to the same border
        this.clickOnBorder(boxNumber, lineClicked);
      }
    }
  }
  this.clickOnBorder = (boxNumber, lineClicked) => {

    $rootScope.gameBoard[boxNumber].borders[lineClicked] = true;

    this.highlightBoxIfScored(boxNumber);
    let adjacentBox = null;
    let adjBoxNumber = null;
    const hasAdjacentBox = ($rootScope.gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`] !== null);
    if (hasAdjacentBox) {
      adjacentBox = $rootScope.gameBoard[boxNumber].surroundingBoxes[`${lineClicked}Box`].boxNumber;
      $rootScope.gameBoard[`box${adjacentBox}`].borders[complementBoarder[`${lineClicked}`]] = true;
      this.highlightBoxIfScored(`box${adjacentBox}`);
      adjBoxNumber = `box${adjacentBox}`;
    }

    const closeTheBoxConnectionParams = [boxNumber, adjBoxNumber, lineClicked, complementBoarder[`${lineClicked}`]]
    this.closeTheBoxConnection(closeTheBoxConnectionParams);
    const scoreParams = [boxNumber, (adjacentBox !== null) ? `box${adjacentBox}` : null];
    this.adjustScore(...scoreParams); // adjust the score
    this.setTurnPlayer(); // set the turn player
    this.isGameOver();
    this.populateBoard(board);
  }
  this.highlightBoxIfScored = (boxNumber) => {
    if (this.getBorderCount(this.getBorderObj(boxNumber)) === 4) {
      $rootScope.gameBoard[boxNumber].whoScored = $rootScope.isFirstPlayerTurn ? "firstPlayerScored" : "secondPlayerScored";
    }
  }
  this.isALineClick = (offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber) => {
    const inUpperOutOfBounds = (offsetX > upperOutOfBoundsNumber) || (offsetY > upperOutOfBoundsNumber);
    const inLowerOutOfBounds = (offsetX < lowerOutOfBoundsNumber) || (offsetY < lowerOutOfBoundsNumber);
    const inTopLeftCorner = (offsetX < lowerOutOfBoundsNumber) && (offsetY < lowerOutOfBoundsNumber);
    const inBottomLeftCorner = (offsetX < lowerOutOfBoundsNumber) && (offsetY > upperOutOfBoundsNumber);
    const inTopRightCorner = (offsetX > upperOutOfBoundsNumber) && (offsetY < lowerOutOfBoundsNumber);
    const inBottomRightCorner = (offsetX > upperOutOfBoundsNumber) && (offsetY > upperOutOfBoundsNumber);
    const hasClickedACorner = (inTopLeftCorner || inBottomLeftCorner || inTopRightCorner || inBottomRightCorner);
    return (inUpperOutOfBounds || inLowerOutOfBounds) && !hasClickedACorner;
  }
  this.getLineClicked = (offsetX, offsetY, upperOutOfBoundsNumber, lowerOutOfBoundsNumber) => {
    let lineClick = null;
    if (offsetX > upperOutOfBoundsNumber) {
      lineClick = "right";
    } else if (offsetX < lowerOutOfBoundsNumber) {
      lineClick = "left";
    } else if (offsetY > upperOutOfBoundsNumber) {
      lineClick = "bottom";
    } else if (offsetY < lowerOutOfBoundsNumber) {
      lineClick = "top";
    }
    return lineClick;
  }
  this.closeTheBoxConnection = (closeTheBoxConnectionParams) => {
    const boxNumber = closeTheBoxConnectionParams[0];
    const adjacentBox = closeTheBoxConnectionParams[1];
    const boxNumberClosedBorder = closeTheBoxConnectionParams[2];
    const adjacentBoxClosedBorder = closeTheBoxConnectionParams[3];
    if ($rootScope.gameBoard[boxNumber].surroundingBoxes[`${boxNumberClosedBorder}Box`]) $rootScope.gameBoard[boxNumber].surroundingBoxes[`${boxNumberClosedBorder}Box`].isConnected = false;
    if (adjacentBox && $rootScope.gameBoard[adjacentBox].surroundingBoxes[`${adjacentBoxClosedBorder}Box`]) $rootScope.gameBoard[adjacentBox].surroundingBoxes[`${adjacentBoxClosedBorder}Box`].isConnected = false;
  }
  this.adjustScore = (boxNumber, adjacentBoxNumber) => {
    const score = (box) => {
      if (this.hasScored(box)) { // check to see if player scored a point
        ($rootScope.isFirstPlayerTurn) ? playerOneScore++ : playerTwoScore++;
        $rootScope.hasScored = true;
        $rootScope.totalPointsScored++;
      }
    }
    if (boxNumber) score(boxNumber);
    if (adjacentBoxNumber) score(adjacentBoxNumber);
  }
  this.hasScored = (boxNumber) => {
    let hasScored = false;
    const isTopClicked = $rootScope.gameBoard[boxNumber].borders.top;
    const isRightClicked = $rootScope.gameBoard[boxNumber].borders.right;
    const isBottomClicked = $rootScope.gameBoard[boxNumber].borders.bottom;
    const isLeftClicked = $rootScope.gameBoard[boxNumber].borders.left;
    if (isTopClicked && isRightClicked && isBottomClicked && isLeftClicked) {
      hasScored = true;
    }
    return hasScored;
  }
  this.setTurnPlayer = () => {
    $rootScope.isFirstPlayerTurn = ($rootScope.hasScored) ? $rootScope.isFirstPlayerTurn : !$rootScope.isFirstPlayerTurn;
    $rootScope.hasScored = false;
    if ($rootScope.isPlayingComputer && !$rootScope.isFirstPlayerTurn) { // make the computer move
      this.makeComputerMove();
    }
  }
  this.isGameOver = () => {
    if ($rootScope.totalPointsScored === totalPointsToScore[$rootScope.gameBoardSize]) {
      console.log("game complete")
    }
  }
  this.adjustBorderCountArrays = () => {
    this.clearBorderArrays();
    this.getGameBoardKeys().forEach(data => {
      const borderCount = this.getBorderCount($rootScope.gameBoard[data].borders);
      if (borderCount === 0) {
        noBorders.push(data);
      } else if (borderCount === 1) {
        oneBorderBoxes.push(data);
      } else if (borderCount === 2) {
        twoBorderBoxes.push(data)
      } else if (borderCount === 3) {
        threeBorderBoxes.push(data);
      }
    })
  }
  this.clearBorderArrays = () => {
    noBorders.length = 0;
    oneBorderBoxes.length = 0;
    twoBorderBoxes.length = 0
    threeBorderBoxes.length = 0;
  }
  this.makeComputerMove = () => {
    if (!$rootScope.computerCanMove) return null
    // logic to make computer move
    $timeout(() => { // makes the computer delay before making a move
      this.makeMoveInSafeBox()
    }, 100);
  }
  this.makeMoveInSafeBox = () => { // make a computer move that doesn't allow opponent the score
    if (threeBorderBoxes.length !== 0) {
      this.getAFreeBox();
    } else if (noBorders.length !== 0) {
      this.clickInANoBorderBox();
    } else if (oneBorderBoxes.length !== 0) {
      this.clickInAOneBorderBox();
    } else if (twoBorderBoxes.length !== 0) {
      this.clickInATwoBorderBox();
    }
    this.populateBoard();
  }
  this.getAFreeBox = () => {
    const clickBox = this.getRandomIndexInArray(threeBorderBoxes);
    Object.keys(this.getGameBoardClickBox(clickBox).borders).forEach(data => {
      if (!this.getGameBoardClickBox(clickBox).borders[data]) {
        this.clickOnBorder(clickBox, data);
      }
    })
  }
  this.clickInANoBorderBox = () => {
    let keepGoing = true;
    let foundMatch = false;
    while (keepGoing) {
      const clickBox = this.getRandomIndexInArray(noBorders);
      noBorders.splice(noBorders.indexOf(clickBox), 1);
      const oneOrLessBorderSurroundingBoxes = this.getLessThanOneBorderNonConnectedSurroundingBoxes(clickBox);
      const selectedBox = this.getRandomIndexInArray(oneOrLessBorderSurroundingBoxes);
      const lineBetweenBoxes = this.getLineBetweenBoxes(clickBox, selectedBox);
      const edgeBox = this.edgeBox(clickBox);
      if (edgeBox.hasEdgeBox) { // if the box is an edge box you can click the edge as a safe move
        keepGoing = false;
        foundMatch = true;
        this.clickOnBorder(clickBox, edgeBox.clickSide);
        break;
      }
      if (noBorders.length === 0) {
        keepGoing = false;
      }
      if (selectedBox && lineBetweenBoxes) {
        keepGoing = false;
        foundMatch = true;
        const line = lineBetweenBoxes.replace("Box", "");
        this.clickOnBorder(clickBox, line);
      }
    }
    return foundMatch;
  }
  this.clickInAOneBorderBox = () => {
    const safeClickBoxWithSide = [];
    oneBorderBoxes.forEach(box => {
      const edgeBox = this.edgeBox(box);
      if (edgeBox.hasEdgeBox) { // this takes care of the corner cases by clicked its empty side
        safeClickBoxWithSide.push({
          clickBox: box,
          clickSide: edgeBox.clickSide
        });
      } else {
        const surroundingOnBorderBoxes = this.getSurroundingBoxes(box).filter(data => oneBorderBoxes.includes(`box${data}`));
        surroundingOnBorderBoxes.forEach(data => {
          const adjObj = this.isAdjacentBoxesConnected(box, `box${data}`);
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
      const clickBoxObj = this.getRandomIndexInArray(safeClickBoxWithSide);
      this.clickOnBorder(clickBoxObj.clickBox, clickBoxObj.clickSide);
    } else {
      this.clickInATwoBorderBox();
    }
  }
  this.clickInATwoBorderBox = () => {
    let multiScoreBoxes = []; // contains all of the connected boxes that score more than once in one turn
    let allSearchedBoxes = [];
    this.getGameBoardKeys().forEach(boxNumber => {
      if (!allSearchedBoxes.includes(boxNumber.replace("Box", "")) && (this.getBorderCount(this.getBorderObj(boxNumber)) !== 4)) {
        let multiScoreGroup = [];
        const searchedBoxes = [];
        multiScoreGroup.push(boxNumber);
        let keepGoing = true;
        while (keepGoing) {
          multiScoreGroup = this.removeDoublesFromArray(multiScoreGroup);
          let boxToSearchAround = this.getNextBoxToInspect(multiScoreGroup, searchedBoxes);

          // if (boxToSearchAround.boxNumber) allSearchedBoxes.push(boxToSearchAround.boxNumber.replace("Box", ""));
          if (boxToSearchAround.continueSearch) {
            searchedBoxes.push(boxToSearchAround.boxNumber);
            const surroundingBoxes = this.getSurroundingBoxes(boxToSearchAround.boxNumber);
            surroundingBoxes.forEach(adjBoxNumber => {
              allSearchedBoxes.push(adjBoxNumber);
              const isConnected = this.isAdjacentBoxesConnected(boxToSearchAround.boxNumber, `box${adjBoxNumber}`).isConnected;
              const borderCount = this.getBorderCount(this.getBorderObj(`box${adjBoxNumber}`));
              if (isConnected && (borderCount === 2)) {
                multiScoreGroup.push(`box${adjBoxNumber}`);
              }
            })
          } else {
            multiScoreBoxes.push(multiScoreGroup);
            keepGoing = false;
          }
        }
      }
    })
    multiScoreBoxes = this.removeCompleteBoxes(multiScoreBoxes);
    this.combineConnections(multiScoreBoxes);
  }
  this.removeCompleteBoxes = (multiScoreBoxes) => {
    const replacementArray = [];
    multiScoreBoxes.forEach(data => {
      if (data.length === 1) {
        if (this.getBorderCount(this.getBorderObj(data[0])) !== 4) {
          replacementArray.push(data);
        }
      } else {
        replacementArray.push(data);
      }
    })
    return replacementArray;
  }
  this.combineConnections = (multiScoreBoxes) => {
    let keepGoing = true;
    const multiScoreBoxePaths = [];
    while (keepGoing) {
      if (multiScoreBoxes.length !== 0) {
        const firstIndex = multiScoreBoxes[0];
        let fullPath = [...firstIndex];
        multiScoreBoxes.splice(0, 1);
        multiScoreBoxes.forEach((data, index) => {
          if (this.isSomeFromArrayInArray(firstIndex, data)) {
            multiScoreBoxes.splice(index, 1);
            fullPath = [...fullPath, ...data];
          }
        })
        multiScoreBoxePaths.push(this.removeDoublesFromArray(fullPath));
      } else {
        keepGoing = false;
      }
    }
    this.chooseBoxToClickInEndGame(multiScoreBoxePaths);
  }
  this.chooseBoxToClickInEndGame = (multiScoreBoxePaths) => {
    const pathToClickABox = multiScoreBoxePaths.sort((a, b) => a.length - b.length);
    const boxToClick = this.getRandomIndexInArray(pathToClickABox[0]);
    let lineClick;
    Object.keys(this.getGameBoardClickBox(boxToClick).borders).forEach(data => {
      if (this.getGameBoardClickBox(boxToClick).borders[data] === null) {
        lineClick = data;
      }
    });
    this.clickOnBorder(boxToClick, lineClick);
  }
  this.lineToClickWithoutScoring = (pathToClickABox) => {
    debugger
    let found = false;
    let box;
    let line;
    pathToClickABox.forEach(data => {
      if (this.getBorderCount(this.getBorderObj(data)) === 2) {
        const surroundingBoxes = this.getSurroundingBoxes(data);
        surroundingBoxes.forEach(d => {
          if (this.getBorderCount(this.getBorderObj(d)) === 2) {
            line = this.getLineBetweenBoxes(data, d);
            box = data;
          }
        })
      }
    })
    return (box) ? {
      box,
      line
    } : null;
  }
  this.isSomeFromArrayInArray = (arr1, arr2) => {
    return arr1.some(data => arr2.includes(data));
  }
  this.removeDoublesFromArray = (array) => {
    const newArray = [];
    array.forEach(data => {
      if (!newArray.includes(data)) newArray.push(data);
    })
    return newArray;
  }
  this.getNextBoxToInspect = (multiScoreGroup, searchedBoxes) => {
    let boxNumber;
    let continueSearch = false;
    for (let i = 0; i < multiScoreGroup.length; i++) {
      if (!searchedBoxes.includes(multiScoreGroup[i])) {
        boxNumber = multiScoreGroup[i];
        continueSearch = true;
        break;
      }
    }
    return {
      boxNumber,
      continueSearch
    }
  }
  this.isAdjacentBoxesConnected = (box1, box2) => {
    const adjObj = {
      isConnected: false
    }
    const bordersBox2 = this.getGameBoardClickBox(box2).borders;
    const surroundingBoxes = this.getGameBoardClickBox(box1).surroundingBoxes;
    this.getSurroundingBoxesKeys(box1).forEach(data => {
      const complement = complementBoarder[data.replace("Box", "")];
      if (surroundingBoxes[data] && (`box${surroundingBoxes[data].boxNumber}` === box2) && (bordersBox2[complement] === null)) {
        adjObj.isConnected = true;
        adjObj.side = data.replace("Box", "");
      }
    })
    return adjObj;
  }
  this.edgeBox = (clickBox) => { // return an edge box
    let edgeBox = {
      hasEdgeBox: false,
      clickSide: null
    };
    const surroundingBoxesKeys = this.getSurroundingBoxesKeys(clickBox);
    const clickBoxObj = this.getGameBoardClickBox(clickBox);
    surroundingBoxesKeys.forEach(data => {
      if ((clickBoxObj.surroundingBoxes[data] === null) && (clickBoxObj.borders[data.replace("Box", "")] === null)) {
        edgeBox.hasEdgeBox = true;
        edgeBox.clickSide = data.replace("Box", "");
      }
    })
    return edgeBox;
  }
  this.getLineBetweenBoxes = (clickBox, selectedBox) => {
    let selectedSide = null;
    this.getSurroundingBoxesKeys(clickBox).forEach(data => {
      const number = (this.getSurroundingBoxesInfo(clickBox, data)) ? this.getSurroundingBoxesInfo(clickBox, data).boxNumber : null;
      if (selectedBox === `box${number}`) {
        selectedSide = data
      }
    });
    return selectedSide;
  }
  this.getLessThanOneBorderNonConnectedSurroundingBoxes = (clickBox) => {
    const surroundingBoxes = this.getSurroundingBoxes(clickBox);
    const matchingBoxes = [];
    surroundingBoxes.map(data => {
      const borders = this.getBorderCount($rootScope.gameBoard[`box${data}`].borders);
      if (borders <= 1) matchingBoxes.push(`box${data}`);
    })
    return matchingBoxes;
  }
  this.getSurroundingBoxes = (clickBox) => {
    const surroundingBoxes = [];
    this.getSurroundingBoxesKeys(clickBox).forEach(data => {
      if (this.getSurroundingBoxesInfo(clickBox, data)) surroundingBoxes.push(this.getSurroundingBoxesInfo(clickBox, data).boxNumber);
    })
    return surroundingBoxes.filter(data => data);
  }
  this.getRandomIndexInArray = (boxArray) => {
    return boxArray[Math.floor(Math.random() * boxArray.length)];
  }
  this.getBorderCount = (borders) => {
    let count = 0;
    Object.keys(borders).forEach(data => {
      if (borders[data]) count++;
    })
    return count;
  }
  this.getBorderObj = (box) => {
    return $rootScope.gameBoard[box].borders
  }
  this.getSurroundingBoxesInfo = (clickBox, boxSide) => {
    return $rootScope.gameBoard[clickBox].surroundingBoxes[boxSide]
  }
  this.getGameBoardClickBox = (clickBox) => {
    return $rootScope.gameBoard[clickBox];
  }
  this.getGameBoardKeys = () => {
    return Object.keys($rootScope.gameBoard);
  }
  this.getSurroundingBoxesKeys = (clickBox) => {
    return Object.keys(this.getGameBoardClickBox(clickBox).surroundingBoxes);
  }
});