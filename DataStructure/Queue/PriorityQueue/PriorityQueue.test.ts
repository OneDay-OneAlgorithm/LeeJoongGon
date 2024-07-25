import Node from './Node';
import PriorityQueue from './PriorityQueue';

describe('PriorityQueue', () => {
  let pq: PriorityQueue;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  it('enqueue()는 우선순위가 높은 노드를 루트 노드로 추가', () => {
    pq.enqueue('Task 1', 3);
    pq.enqueue('Task 2', 1);
    pq.enqueue('Task 3', 2);

    expect(pq.values).toHaveLength(3);
    expect(pq.values[0]).toEqual(new Node('Task 2', 1));
  });

  it('dequeue()는 가장 높은 우선순위의 노드를 반환', () => {
    pq.enqueue('Task 1', 3);
    pq.enqueue('Task 2', 1);
    pq.enqueue('Task 3', 2);

    const firstDequeued = pq.dequeue();
    expect(firstDequeued).toEqual(new Node('Task 2', 1));
    expect(pq.values).toHaveLength(2);

    const secondDequeued = pq.dequeue();
    expect(secondDequeued).toEqual(new Node('Task 3', 2));
    expect(pq.values).toHaveLength(1);

    const thirdDequeued = pq.dequeue();
    expect(thirdDequeued).toEqual(new Node('Task 1', 3));
    expect(pq.values).toHaveLength(0);
  });

  it('enqueue(), dequeue()는 올바른 순서로 노드를 추가하고 제거', () => {
    pq.enqueue('Task 1', 3);
    pq.enqueue('Task 2', 1);
    pq.enqueue('Task 3', 4);
    pq.enqueue('Task 4', 2);

    expect(pq.dequeue()).toEqual(new Node('Task 2', 1));
    expect(pq.dequeue()).toEqual(new Node('Task 4', 2));

    pq.enqueue('Task 5', 0);

    expect(pq.dequeue()).toEqual(new Node('Task 5', 0));
    expect(pq.dequeue()).toEqual(new Node('Task 1', 3));
    expect(pq.dequeue()).toEqual(new Node('Task 3', 4));
  });

  it('dequeue()는 비어있는 큐에서 undefined를 반환', () => {
    expect(pq.dequeue()).toBeUndefined();
  });
});
