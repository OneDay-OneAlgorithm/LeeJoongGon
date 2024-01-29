import SinglyLinkedList from './SinglyLinkedList';

describe('SinglyLinkedList', () => {
  describe('push', () => {
    it('연결 리스트 끝에 새로운 노드를 추가', () => {
      const linkedList = new SinglyLinkedList();

      linkedList.push(1);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.length).toBe(1);

      linkedList.push(2);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(2);
      expect(linkedList.length).toBe(2);

      linkedList.push(3);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(3);
      expect(linkedList.length).toBe(3);
    });
  });

  describe('pop', () => {
    it('연결 리스트의 마지막 노드를 제거하고 반환', () => {
      const linkedList = new SinglyLinkedList();

      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      const poppedNode = linkedList.pop();
      expect(poppedNode?.data).toBe(3);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(2);
      expect(linkedList.length).toBe(2);
    });

    it('연결 리스트가 비어있을 때는 undefined를 반환', () => {
      const linkedList = new SinglyLinkedList();

      const poppedNode = linkedList.pop();
      expect(poppedNode).toBeUndefined();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.length).toBe(0);
    });
  });

  describe('shift', () => {
    it('연결 리스트의 첫 번째 노드를 제거하고 반환', () => {
      const linkedList = new SinglyLinkedList();

      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      const shiftedNode = linkedList.shift();
      expect(shiftedNode?.data).toBe(1);
      expect(linkedList.head?.data).toBe(2);
      expect(linkedList.tail?.data).toBe(3);
      expect(linkedList.length).toBe(2);
    });

    it('연결 리스트가 비어있을 때는 undefined를 반환', () => {
      const linkedList = new SinglyLinkedList();

      const shiftedNode = linkedList.shift();
      expect(shiftedNode).toBeUndefined();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.length).toBe(0);
    });
  });

  describe('unshift', () => {
    it('연결 리스트의 첫 번째에 새로운 노드를 추가', () => {
      const linkedList = new SinglyLinkedList();

      linkedList.unshift(1);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.length).toBe(1);

      linkedList.unshift(2);
      expect(linkedList.head?.data).toBe(2);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.length).toBe(2);

      linkedList.unshift(3);
      expect(linkedList.head?.data).toBe(3);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.length).toBe(3);
    });
  });

  describe('get', () => {
    it('인덱스에 해당하는 노드를 반환', () => {
      const linkedList = new SinglyLinkedList();

      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      const nodeAtIndex1 = linkedList.get(1);
      expect(nodeAtIndex1?.data).toBe(2);

      const nodeAtIndex2 = linkedList.get(2);
      expect(nodeAtIndex2?.data).toBe(3);
    });

    it('인덱스가 범위를 벗어날 때는 null을 반환', () => {
      const linkedList = new SinglyLinkedList();

      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      const nodeAtIndex3 = linkedList.get(3);
      expect(nodeAtIndex3).toBeNull();

      const nodeAtIndexNegative = linkedList.get(-1);
      expect(nodeAtIndexNegative).toBeNull();
    });
  });
});
