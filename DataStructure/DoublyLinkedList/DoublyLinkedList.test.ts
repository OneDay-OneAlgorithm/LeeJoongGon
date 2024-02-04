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

    describe('pop', () => {
      it('연결 리스트의 마지막 노드를 제거하고 반환', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.push(1).push(2).push(3);

        const poppedNode = linkedList.pop();
        expect(poppedNode?.data).toBe(3);
        expect(linkedList.head?.data).toBe(1);
        expect(linkedList.head?.next?.data).toBe(2);
        expect(linkedList.tail?.data).toBe(2);
        expect(linkedList.tail?.prev?.data).toBe(1);
        expect(linkedList.length).toBe(2);
      });

      it('연결 리스트가 비어있을 때는 undefined를 반환', () => {
        const linkedList = new DoublyLinkedList();

        const poppedNode = linkedList.pop();
        expect(poppedNode).toBeUndefined();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
        expect(linkedList.length).toBe(0);
      });
    });
  });
});
