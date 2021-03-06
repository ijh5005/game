//  six by six board
//  0   1   2   3   4   5
//  6   7   8   9   10  11
//  12  13  14  15  16  17
//  18  19  20  21  22  23
//  24  25  26  27  28  29
//  30  31  32  33  34  35

const thirtysix = {
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
    },
    isTopLeftCornerBox: true
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
    },
    isTopSideRow: true
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
    },
    isTopSideRow: true
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
    },
    isTopSideRow: true
  },
  box4: {
    isLargeExplosion: true,
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
    },
    isTopSideRow: true
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
    },
    isTopRightCornerBox: true
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
    },
    isLeftSideRow: true
  },
  box7: {
    isVeryLargeExplosion: true,
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
    isMediumExplosion: true,
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
    isMediumExplosion: true,
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
    isLargeExplosion: true,
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
    },
    isRightSideRow: true
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
    },
    isLeftSideRow: true
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
    isMediumExplosion: true,
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
    isMediumExplosion: true,
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
    },
    isRightSideRow: true
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
    },
    isLeftSideRow: true
  },
  box19: {
    isLargeExplosion: true,
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
    isHorizontalExplosion: true,
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
    },
    isRightSideRow: true
  },
  box24: {
    isVerticalExplosion: true,
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
    },
    isLeftSideRow: true
  },
  box25: {
    isMediumExplosion: true,
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
    isVerticalExplosion: true,
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
    },
    isRightSideRow: true
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
    },
    isBottomLeftCornerBox: true
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
    },
    isBottomSideRow: true
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
    },
    isBottomSideRow: true
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
    },
    isBottomSideRow: true
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
    },
    isBottomSideRow: true
  },
  box35: {
    isHorizontalExplosion: true,
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
    },
    isBottomRightCornerBox: true
  }
}
