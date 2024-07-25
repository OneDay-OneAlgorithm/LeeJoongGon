import MaxBinaryHeap from './MaxBinaryHeap';

describe('MaxBinaryHeap', () => {
  let heap: MaxBinaryHeap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  describe('insert()', () => {
    it('부모 노드보다 작은 값이 들어오면 배열의 맨 끝에 추가', () => {
      heap.insert(10);
      heap.insert(5);

      expect(heap.values).toEqual([10, 5]);
    });

    it('부모 노드보다 큰 값이 들어오면 부모 노드와 위치를 변경', () => {
      heap.insert(10);
      heap.insert(15);

      expect(heap.values).toEqual([15, 10]);
    });
  });

  describe('extractMax()', () => {
    it('루트 노드를 반환하고 배열의 맨 끝의 값을 새로운 루트 노드로 설정', () => {
      heap.insert(10);
      heap.insert(5);
      heap.insert(15);

      expect(heap.extractMax()).toBe(15);
      expect(heap.extractMax()).toBe(10);
      expect(heap.extractMax()).toBe(5);
    });

    it('새로운 루트 노드가 자식 노드보다 작으면 자식 노드와 위치를 변경', () => {
      heap.insert(10);
      heap.insert(5);
      heap.insert(15);
      heap.insert(20);

      expect(heap.extractMax()).toBe(20);
      expect(heap.values).toEqual([15, 5, 10]);
    });
  });
});
