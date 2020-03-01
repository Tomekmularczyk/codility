// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i += 1) {
    const l = s.charAt(i);
    const nextL = s.charAt(i + 1);
    if (l === nextL) {
      count += 1;
    }
  }

  return count;
}

console.log(alternatingCharacters("abb"));
