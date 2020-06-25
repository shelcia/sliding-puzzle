document.addEventListener("DOMContentLoaded", game);

function game() {
  // Data structure to hold positions of tiles
  var parentX = document.querySelector(".sliding-puzzle").clientHeight;
  var baseDistance = 34.5;
  var tileMap = {
    1: {
      tileNumber: 1,
      position: 1,
      top: 0,
      left: 0
    },
    2: {
      tileNumber: 2,
      position: 2,
      top: 0,
      left: baseDistance * 1
    },
    3: {
      tileNumber: 3,
      position: 3,
      top: 0,
      left: baseDistance * 2
    },
    4: {
      tileNumber: 4,
      position: 4,
      top: baseDistance,
      left: 0
    },
    5: {
      tileNumber: 5,
      position: 5,
      top: baseDistance,
      left: baseDistance
    },
    6: {
      tileNumber: 6,
      position: 6,
      top: baseDistance,
      left: baseDistance * 2
    },
    7: {
      tileNumber: 7,
      position: 7,
      top: baseDistance * 2,
      left: 0
    },
    8: {
      tileNumber: 8,
      position: 8,
      top: baseDistance * 2,
      left: baseDistance
    },
    9: {
      tileNumber: 9,
      position: 9,
      top: baseDistance * 2,
      left: baseDistance
    },
    10: {
      tileNumber: 10,
      position: 10,
      top: baseDistance * 2,
      left: baseDistance
    },
    11: {
      tileNumber: 11,
      position: 11,
      top: baseDistance * 2,
      left: baseDistance
    },
    12: {
      tileNumber: 12,
      position: 12,
      top: baseDistance * 2,
      left: baseDistance
    },
    13: {
      tileNumber: 13,
      position: 13,
      top: baseDistance * 2,
      left: baseDistance
    },
    14: {
      tileNumber: 14,
      position: 14,
      top: baseDistance * 2,
      left: baseDistance
    },
    15: {
      tileNumber: 15,
      position: 15,
      top: baseDistance * 2,
      left: baseDistance
    },
    empty: {
      position: 16,
      top: baseDistance * 2,
      left: baseDistance * 2
    }
  };
  function setup(tile) {
    var tileId = tile.innerHTML;
    // tile.style.left = tileMap[tileId].left + '%';
    // tile.style.top = tileMap[tileId].top + '%';
    var xMovement = parentX * (tileMap[tileId].left / 100);
    var yMovement = parentX * (tileMap[tileId].top / 100);
    var translateString =
      "translateX(" + xMovement + "px) " + "translateY(" + yMovement + "px)";
    tile.style.webkitTransform = translateString;
  }
}
