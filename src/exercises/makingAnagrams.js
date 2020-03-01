// const removeCharAt = (string, index) => {
//   return string.slice(0, index) + string.slice(index + 1);
// };

// // Complete the makeAnagram function below.
// function makeAnagram(a, b) {
//   let count = 0;

//   let shorter = a;
//   let longer = b;
//   if (shorter.length > longer.length) {
//     shorter = b;
//     longer = a;
//   }

//   for (let i = 0, length = shorter.length; i < length; i += 1) {
//     const current = shorter.charAt(i);
//     const charIndex = longer.indexOf(current);
//     if (charIndex > -1) {
//       longer = removeCharAt(longer, charIndex);
//     } else {
//       count += 1;
//     }
//   }

//   return count + longer.length;
// }

function makeAnagram(a, b) {
  // 0(n)
  const putStringToMap = str => {
    const map = new Map();
    str.split("").forEach(v => {
      const count = map.get(v);
      if (count === undefined) {
        map.set(v, 1);
      } else {
        map.set(v, count + 1);
      }
    });
    return map;
  };

  const countDelta = (map1, map2) => {
    for (const [key, val] of map1) {
      const map2Val = map2.get(key);
      if (map2Val === undefined) {
        map2.set(key, -1);
      } else {
        map2.set(key, map2Val - val);
      }
    }
    console.log(map2.values());
    return [...map2.values()].reduce((prev, v) => prev + Math.abs(v), 0);
  };

  const aMap = putStringToMap(a);
  const bMap = putStringToMap(b);
  return countDelta(aMap, bMap);
}

// console.log(makeAnagram("cde", "abc"));
console.log(
  makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
