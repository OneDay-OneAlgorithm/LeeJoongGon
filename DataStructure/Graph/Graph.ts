class Graph {
  adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(key: string) {
    if (!this.adjacencyList.has(key)) {
      this.adjacencyList.set(key, []);
    }
  }

  removeVertex(key: string) {
    if (this.adjacencyList.has(key)) {
      const adjacencyVertices = this.adjacencyList.get(key);
      adjacencyVertices!.forEach((vertex) => this.removeEdge(key, vertex));
      this.adjacencyList.delete(key);
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1)!.push(vertex2);
      this.adjacencyList.get(vertex2)!.push(vertex1);
    }
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1)!.filter((vertex) => vertex !== vertex2),
      );
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2)!.filter((vertex) => vertex !== vertex1),
      );
    }
  }

  dfsRecursive(start: string) {
    const result: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};

    const dfs = (vertex: string) => {
      visited[vertex] = true;
      result.push(vertex);

      const adjacencyVertices = this.adjacencyList.get(vertex);
      if (adjacencyVertices) {
        adjacencyVertices.forEach((adjacencyVertex) => {
          if (!visited[adjacencyVertex]) {
            dfs(adjacencyVertex);
          }
        });
      }
    };

    dfs(start);

    return result;
  }

  dfsIterative(start: string) {
    const result: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};

    const stack: string[] = [];
    stack.push(start);
    visited[start] = true;

    while (stack.length > 0) {
      const vertex = stack.pop()!;
      result.push(vertex);

      const adjacencyVertices = this.adjacencyList.get(vertex);
      if (adjacencyVertices) {
        adjacencyVertices.forEach((adjacencyVertex) => {
          if (!visited[adjacencyVertex]) {
            stack.push(adjacencyVertex);
            visited[adjacencyVertex] = true;
          }
        });
      }
    }

    return result;
  }
}

export default Graph;

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.dfsRecursive('A')); // ['A', 'B', 'D', 'E', 'C', 'F']
console.log(graph.dfsIterative('A')); // ['A', 'C', 'E', 'F', 'D', 'B']
