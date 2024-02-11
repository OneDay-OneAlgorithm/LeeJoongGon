import Queue from './Queue';

describe('Queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('enqueue() 메서드는 큐의 끝에서 항목을 추가', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size).toBe(3);
    expect(queue.last?.data).toBe(3);
    expect(queue.first?.data).toBe(1);
  });

  it('dequeue() 메서드는 큐의 처음에 위치한 항목을 반환', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const dequeuedElement = queue.dequeue();

    expect(dequeuedElement).toBe(1);
    expect(queue.size).toBe(2);
    expect(queue.last?.data).toBe(3);
    expect(queue.first?.data).toBe(2);
  });

  it('dequeue() 메서드는 큐가 비어있으면 null을 반환', () => {
    const dequeuedElement = queue.dequeue();

    expect(dequeuedElement).toBeNull();
    expect(queue.size).toBe(0);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
  });
});
