import Graph from './Graph';

describe('Graph', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addVertex()', () => {
    test('정점을 추가하면 값을 빈 배열로 초기화', () => {
      graph.addVertex('A');
      expect(graph.adjacencyList.has('A')).toBe(true);
      expect(graph.adjacencyList.get('A')).toEqual([]);
    });

    test('이미 존재하는 정점을 추가하지 않음', () => {
      graph.addVertex('A');
      graph.addVertex('A');
      expect(graph.adjacencyList.size).toBe(1);
    });
  });

  describe('removeVertex()', () => {
    test('정점을 삭제하면 연결된 정점을 순회하며 해당 정점을 제거', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      graph.removeVertex('A');
      expect(graph.adjacencyList.has('A')).toBe(false);
      expect(graph.adjacencyList.get('B')).toEqual([]);
    });
  });

  describe('addEdge()', () => {
    test('간선을 추가하면 각 정점이 유지하는 리스트에 다른 정점을 추가', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      expect(graph.adjacencyList.get('A')).toEqual(['B']);
      expect(graph.adjacencyList.get('B')).toEqual(['A']);
    });

    test('존재하지 않는 정점에 대해서는 간선을 추가하지 않음', () => {
      graph.addVertex('A');
      graph.addEdge('A', 'B');
      expect(graph.adjacencyList.get('A')).toEqual([]);
    });
  });

  describe('removeEdge()', () => {
    test('간선을 제거하면 각 정점이 유지하는 리스트에서 다른 정점을 제거', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      graph.removeEdge('A', 'B');
      expect(graph.adjacencyList.get('A')).toEqual([]);
      expect(graph.adjacencyList.get('B')).toEqual([]);
    });

    test('존재하지 않는 간선에 대해서는 간선을 제거하지 않음', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      graph.removeEdge('A', 'C');
      expect(graph.adjacencyList.get('A')).toEqual(['B']);
      expect(graph.adjacencyList.get('B')).toEqual(['A']);
    });
  });

  describe('dfsRecursive()', () => {
    test('시작 정점부터 깊이 우선 탐색을 수행하여 정점을 반환', () => {
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

      const result = graph.dfsRecursive('A');

      expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    });
  });

  describe('dfsIterative()', () => {
    test('시작 정점부터 깊이 우선 탐색을 수행하여 정점을 반환', () => {
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

      const result = graph.dfsIterative('A');

      expect(result).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
    });

    describe('bfsIterative()', () => {
      test('시작 정점부터 너비 우선 탐색을 수행하여 정점을 반환', () => {
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

        const result = graph.bfsIterative('A');

        expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
      });
    });
  });
});
