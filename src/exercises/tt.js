const format = value => +value.toFixed(2);

function getChange(moneyInsterted, value) {
  const returnedValue = [0, 0, 0, 0, 0, 0];
  let rest = format(moneyInsterted - value);

  while (rest >= 1) {
    rest = format(rest - 1);
    returnedValue[5] = returnedValue[5] + 1;
  }

  while (rest >= 0.5) {
    rest = format(rest - 0.5);
    returnedValue[4] = returnedValue[4] + 1;
  }

  while (rest >= 0.25) {
    rest = format(rest - 0.25);
    returnedValue[3] = returnedValue[3] + 1;
  }

  while (rest >= 0.1) {
    rest = format(rest - 0.1);
    returnedValue[2] = returnedValue[2] + 1;
  }

  while (rest >= 0.05) {
    rest = format(rest - 0.05);
    returnedValue[1] = returnedValue[1] + 1;
  }

  while (rest >= 0.01) {
    rest = format(rest - 0.01);
    returnedValue[0] = returnedValue[0] + 1;
  }

  return returnedValue;
}

console.log(getChange(3.14, 1.99)); // should return [0,1,1,0,0,1]
console.log(getChange(5, 0.99)); // should return [1,0,0,0,0,4]
console.log(getChange(4, 3.14)); // should return [1,0,1,1,1,0]
console.log(getChange(0.45, 0.34)); // should return [1,0,1,0,0,0]
