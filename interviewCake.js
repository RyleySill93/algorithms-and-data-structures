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

//Highest Product of 3
function highestProd(arr) {
  let highPositives = [];
  let largeNegatives = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num >= 0) {
      if (highPositives.length < 3) {
        highPositives.push(num);
      } else {
        highPositives = highPositives.sort();
        if (num > highPositives[0]) {
          highPositives[0] = num;
        }
      }
    } else {
      if (largeNegatives.length < 2) {
        largeNegatives.push(num);
      } else {
        largeNegatives = largeNegatives.sort();
        if (num < largeNegatives[0]) {
          largeNegatives[0] = num;
        }
      }
    }
  }

  highPositives = highPositives.sort();
  let positiveProd = highPositives[0] * highPositives[1] * highPositives[2];

  if (largeNegatives.length > 1) {
    let negativeProd = largeNegatives[0] * largeNegatives[1] * highPositives[highPositives.length - 1];
    if (negativeProd > positiveProd) {
      return negativeProd;
    } else {
      return positiveProd;
    }
  }
}

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
