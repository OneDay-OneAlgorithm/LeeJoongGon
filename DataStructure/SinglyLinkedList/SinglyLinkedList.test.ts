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
});
