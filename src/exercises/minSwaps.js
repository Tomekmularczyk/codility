function minimumSwaps(arr) {
  let swapsCount = 0;

  let currentIndex = 0;
  while (arr[currentIndex] !== currentIndex + 1) {
    const correctIndex = arr.indexOf(currentIndex + 1);
    [arr[currentIndex], arr[correctIndex]] = [
      arr[correctIndex],
      arr[currentIndex]
    ];
    currentIndex = correctIndex;
    swapsCount += 1;
  }

  return swapsCount;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
