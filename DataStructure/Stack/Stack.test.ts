import Stack from './Stack';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('push() 메서드는 스택의 끝에서 항목을 추가', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.last?.data).toBe(3);
    expect(stack.first?.data).toBe(1);
  });

  it('pop() 메서드는 스택의 끝에 위치한 항목을 반환', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const poppedElement = stack.pop();

    expect(poppedElement).toBe(3);
    expect(stack.size).toBe(2);
    expect(stack.last?.data).toBe(2);
    expect(stack.first?.data).toBe(1);
  });

  it('pop() 메서드는 스택이 비어있으면 null을 반환', () => {
    const poppedElement = stack.pop();

    expect(poppedElement).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
  });
});
