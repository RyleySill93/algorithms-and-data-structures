



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
