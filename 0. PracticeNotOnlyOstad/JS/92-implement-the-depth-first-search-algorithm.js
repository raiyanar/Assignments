function dfs(graph, root) {
  const visited = new Set();
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
        if (graph[node][neighbor] === 1 && !visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}
