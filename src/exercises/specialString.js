function isSpecialStr(s) {
  const isOdd = s.length % 2 !== 0;

  let prevL = s.charAt(0);
  for (let i = 0; i < s.length; i += 1) {
    if (s.charAt(i) === prevL) {
      continue;
    }

    const isMiddle = Math.floor(s.length / 2) === i;
    if (isOdd && isMiddle) {
      continue;
    }

    return false;
  }

  return true;
}

function substrCount(s) {
  let count = 0;
  const memo = {};
  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j <= s.length; j += 1) {
      const subStr = s.substr(i, j - i);
      const memoValue = memo[subStr];
      if (memoValue !== undefined) {
        if (memoValue) {
          count += 1;
        }
        continue;
      }

      const isSpecial = isSpecialStr(subStr);
      if (isSpecial) {
        count += 1;
      }
    }
  }

  return count;
}

console.log(substrCount("asasd"));
