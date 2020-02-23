const addToMap = (map, v) => {
  if (map.has(v)) {
    map.set(v, map.get(v) + 1);
  } else {
    map.set(v, 1);
  }
};

const deleteFromMap = (map, v) => {
  if (map.has(v)) {
    const count = map.get(v);
    if (count > 1) {
      map.set(v, count - 1);
    } else {
      map.delete(v);
    }
  }
};

function countTriplets(arr, r) {
  if (arr.length < 3) {
    return 0;
  }

  let triplets = 0;
  const left = new Map();
  const right = new Map();
  arr.forEach(v => {
    addToMap(right, v);
  });

  for (let i = 0; i < arr.length; i += 1) {
    deleteFromMap(right, arr[i]);

    const current = arr[i];
    const leftCount = left.get(current / r);
    const rightCount = right.get(current * r);
    if (leftCount !== undefined && rightCount !== undefined) {
      triplets += leftCount * rightCount;
    }

    addToMap(left, arr[i]);
  }

  return triplets;
}

// console.log(countTriplets([1, 2, 2, 4], 2));
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
