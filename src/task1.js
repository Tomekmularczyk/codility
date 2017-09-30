/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

For another example, given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

/*
0. Sort array
1. start with index 0
2. check if next item has value of arr[i]+1 === arr[i+1]
   a) TAK - wróć do kroku 2
   b) nie - zwróć wartość
3. jeżeli w pętlia nie zwróciła niczego, zwróć arr[arr.length] + 1;
4.

*/

function sort(array) {
    return array.sort((a, b) => (a - b));
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const sortedArray = sort(A);

    for (let i = 0; i < sortedArray.length; i++) {
        if (i === (sortedArray.length - 1)) {
            break;
        }
        if (sortedArray[i] + 1 < sortedArray[i + 1]) {
            if (sortedArray[i] + 1 > 0) {
                return sortedArray[i] + 1;
            }
        }
    }

    let returnValue = sortedArray[sortedArray.length - 1] + 1;
    if (returnValue > 100000) {
        returnValue = sortedArray[0] - 1;
    }
    return returnValue < 1 ? 1 : returnValue;
}

// function solution2(arr) {
//     // write your code in JavaScript (Node.js 6.4.0)
//     let min = Math.min.apply(Math, arr);
//     let max = Math.max.apply(Math, arr);
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(min + 1) === -1) {
//             if (min + i > 0) {
//                 return min + 1;
//             }
//         }
//     }
//
//     let returnValue = max + 1;
//
//     if (returnValue > 100000) {
//         returnValue = min - 1;
//     }
//
//     if (returnValue < 0) {
//         returnValue = 1;
//     }
//
//     return returnValue;
// }

module.exports.sort = sort;
module.exports.solution = solution;
