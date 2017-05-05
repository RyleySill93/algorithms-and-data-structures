function overlap(rect1, rect2) {
  let xOverlap = getXOverlap(rect1, rect2);
  let yOverlap = getYOverlap(rect1, rect2);
  return {
    leftX: xOverlap.point,
    bottomY: yOverlap.point,
    width: xOverlap.size,
    height: yOverlap.size
  };
}

function getXOverlap(rect1, rect2) {
  let largerStart = Math.max(rect1.leftX, rect2.leftX);
  let smallerEnd = Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width);
  if (largerStart >= smallerEnd) {
    return {point: null, size: null};
  }
  return {point: largerStart, size: smallerEnd - largerStart};
}

function getYOverlap(rect1, rect2) {
  let largerStart = Math.max(rect1.bottomY, rect2.bottomY);
  let smallerEnd = Math.min(rect1.bottomY + rect1.height, rect2.bottomY + rect2.height);
  if (largerStart >= smallerEnd) {
    return {point: null, size: null};
  }
  return {point: largerStart, size: smallerEnd - largerStart};
}

var myRectangle = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,

};


function validBST(node, min = null, max = null) {
  if (!node) {
    return true;
  }

  if ((min && min > node.val) || (max && max < node.val)) {
    return false;
  }

  return validBST(node.left, min, node.val) && validBST(node.right, max, node.val)
}
