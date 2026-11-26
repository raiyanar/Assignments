function adjacencyListToMatrix(adjList) {
  // Number of nodes = number of keys in the adjacency list
  let n = Object.keys(adjList).length;

  // Create an n x n matrix filled with 0s
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  // Add edges from the adjacency list
  for (let node in adjList) {
    let from = Number(node);
    let neighbors = adjList[node];

    for (let i = 0; i < neighbors.length; i++) {
      let to = neighbors[i];
      matrix[from][to] = 1;
    }
  }

  // Print each row
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }

  // Return the matrix
  return matrix;
}
