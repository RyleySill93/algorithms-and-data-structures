function oneAway(str1, str2) {
  let seen = new Object();
  let diff = 0;
  str1.split("").forEach(char => {
    if (seen[char]) {
      seen[char] += 1;
    } else {
      seen[char] = 1;
    }
  });
  str2.split("").forEach(char => {
    if (seen[char]) {
      seen[char] -= 1;
    } else {
      diff += 1;
    }
  });
  for (const key of Object.keys(seen)) {
    if (seen[key] > 0) {
      diff += 1;
    }
  }
  if (str1.length === str2.length) {
    return diff > 2 ? false : true;
  } else {
    return diff > 1 ? false : true;
  }
}

function compression(str) {
  let arr = [];
  let returnStr = true;
  str.split("").forEach(char => {
    let last = arr[arr.length - 1];
    if (arr.length !== 0 && last[0] === char) {
      last[1] += 1;
      returnStr = false;
    } else {
      arr.push([char, 1]);
    }
  });
  return returnStr ? str : [].concat.apply([], arr).join("");
}
