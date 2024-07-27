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
}

export default Graph;
