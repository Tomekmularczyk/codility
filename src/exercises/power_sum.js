/**
Find the number of ways that a given integer, X, can be expressed as the sum of the  power of unique, natural numbers.

Input Format
The first line contains an integer X (1-1000). 
The second line contains an integer N (1-10).

100 2

0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 10

1. przekształc liczby do potegi i zatrzymaj w liscie


 */

function isPrime(value) {
  if (value === 1 || value % 2 === 0) {
    return false;
  }

  if (value === 2) {
    return true;
  }

  for (let j = 3; j < value; j += 2) {
    if (value % j === 0) {
      return false;
    }
  }

  return true;
}

const ar = [
  1,
  4,
  9,
  16,
  25,
  36,
  49,
  64,
  81,
  100,
  121,
  144,
  169,
  196,
  225,
  256,
  289,
  324,
  361,
  400,
  441,
  484,
  529,
  576,
  625,
  676,
  729,
  784,
  841
];

console.log(ar.map(val => isPrime(val)));
