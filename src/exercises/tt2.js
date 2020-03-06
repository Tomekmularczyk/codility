function findMines(matrix, i, j) {
  let count = 0;

  if (typeof matrix[i - 1] !== "undefined") {
    if (matrix[i - 1][j - 1] === "X") {
      count += 1;
    }
    if (matrix[i - 1][j] === "X") {
      count += 1;
    }
    if (matrix[i - 1][j + 1] === "X") {
      count += 1;
    }
  }

  if (matrix[i][j - 1] === "X") {
    count += 1;
  }

  if (matrix[i][j + 1] === "X") {
    count += 1;
  }

  if (typeof matrix[i + 1] !== "undefined") {
    if (matrix[i + 1][j - 1] === "X") {
      count += 1;
    }
    if (matrix[i + 1][j] === "X") {
      count += 1;
    }
    if (matrix[i + 1][j + 1] === "X") {
      count += 1;
    }
  }

  return count;
}

function minesweeper(rows) {
  const matrix = rows.map(row => {
    return row.split("");
  });

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j += 1) {
      const element = row[j];
      if (element === "O") {
        matrix[i][j] = findMines(matrix, i, j);
      }
    }
  }

  matrix.forEach(row => {
    console.log(row.join(" "));
  });
}

minesweeper(["XOO", "OOO", "XXO"]);

const test1 = [
  "XOOXXXOO",
  "OOOOXOXX",
  "XXOXXOOO",
  "OXOOOXXX",
  "OOXXXXOX",
  "XOXXXOXO",
  "OOOXOXOX",
  "XOXXOXOX"
];
minesweeper(test1);

const test2 = ["OOOXXXOXX", "XXXXXXOXX", "XOOXXXXXX", "OOXXOXOXX", "XXXXXXXXX"];
minesweeper(test2);
