function domino(S) {
  if (S.length < 3) {
    return 0;
  }
  const tiles = S.split(",");

  let longestSequence = 1;
  let currentSequence = 1;

  for (let i = 0; i < tiles.length; i++) {
    const currentTile = tiles[i].split("-");
    if (i + 1 === tiles.length) {
      if (currentSequence > longestSequence) {
        longestSequence = currentSequence;
      }
      //last one
      break;
    }

    const nextTile = tiles[i + 1].split("-");
    if (currentTile[1] === nextTile[0]) {
      currentSequence += 1;
    } else {
      currentSequence = 1;
    }
    if (currentSequence > longestSequence) {
      longestSequence = currentSequence;
    }
  }

  return longestSequence;
}

console.log(domino("1-1"), "expect 1"); // 1
console.log(domino("1-2,1-2"), "expect 1"); // 1
console.log(domino("3-2,2-1,1-4,4-4,5-4,4-2,2-1"), "expect 4"); // 4
console.log(domino("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5"), "expect 7"); // 7
console.log(domino("1-1,3-5,5-5,5-4,4-2,1-3"), "expect 4"); // 4
console.log(domino("1-2,2-2,3-3,3-4,4-5,1-1,1-2"), "expect 3"); // 3
