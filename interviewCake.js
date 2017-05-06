//Apple Stocks
function stockPicker(prices) {
  let minSoFar = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minSoFar > maxProfit) {
      maxProfit = prices[i] - minSoFar;
    }
    if (minSoFar > prices[i]) {
      minSoFar = prices[i];
    }
  }
  if (maxProfit < 0) {
    return false;
  }
  return maxProfit;
}

//Product of all other numbers
function products(arr) {
  let prodSoFar = 1;
  let newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let res = arr[i] * prodSoFar;
    prodSoFar = res;
    newArr[i] = res;
  }

  let prodSoFar2 = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let res2 = newArr[i] * prodSoFar2;
    prodSoFar2 = res2;
    newArr[i] = res2;
  }
  return newArr;
}

  [1, 7, 3, 4]

  [84, 12, 28, 21]

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

function validParens(str) {
  let openerStack = [];

}
