import DoublyLinkedList from './DoublyLinkedList';

describe('DoubleLinkedList', () => {
  describe('push', () => {
    it('연결 리스트의 끝에 노드를 추가', () => {
      const linkedList = new DoublyLinkedList();

      linkedList.push(1).push(2).push(3);

      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.head?.next?.data).toBe(2);
      expect(linkedList.tail?.data).toBe(3);
      expect(linkedList.tail?.prev?.data).toBe(2);
      expect(linkedList.length).toBe(3);
    });
  });
});
