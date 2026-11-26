function dfsNQueens(n) {
  if (n < 1) return [];

  const solutions = [];
  const board = []; // board[row] = column

  function isSafe(row, col) {
    for (let r = 0; r < row; r++) {
      const c = board[r];
      // same column
      if (c === col) return false;
      // same diagonal
      if (Math.abs(c - col) === Math.abs(r - row)) return false;
    }
    return true;
  }

  function dfs(row) {
    if (row === n) {
      solutions.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = col;
        dfs(row + 1);
      }
    }
  }

  dfs(0);
  return solutions;
}
