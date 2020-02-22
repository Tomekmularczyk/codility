const swap = (arr, one, two) => {
  [arr[one], arr[two]] = [arr[two], arr[one]];
};

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length - 1; i > 0; i -= 1) {
    let person = i + 1;
    if (q[i] === person) {
      continue;
    }
    if (q[i - 1] && q[i - 1] === person) {
      bribes += 1;
      swap(q, i, i - 1);
      continue;
    }
    if (q[i - 2] && q[i - 2] === person) {
      bribes += 2;
      swap(q, i - 1, i - 2);
      swap(q, i, i - 1);
      continue;
    }
    return "too chaotic";
  }

  return bribes;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
