/**
 * Given a square matrix of size, calculate the absolute difference between the sums of its diagonals.

 11 2 4
 4 5 6
 10 8 -12

 11 + 5 - 12 = 4
 4 + 5 + 10 = 19
 4 - 19 = -15

 return absolute value
 **/


function diagonalDifference(matrix) {
    if (!matrix.length) {
        return 0;
    }

    const leftDiagonal = [];
    const rightDiagonal = [];
    for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
        leftDiagonal.push(matrix[i][i]);
        rightDiagonal.push(matrix[i][j]);
    }

    const leftSum = leftDiagonal.reduce((a, b) => a + b);
    const rightSum = rightDiagonal.reduce((a, b) => a + b);
    return Math.abs(leftSum - rightSum);
}


module.exports.diagonalDifference = diagonalDifference;
