import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  describe('insert()', () => {
    it('루트 노드가 없으면 루트 노드로 추가', () => {
      tree.insert(10);

      expect(tree.root?.value).toBe(10);
    });

    it('루트 노드가 있으면 적절한 위치에 추가', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      expect(tree.root?.value).toBe(10);
      expect(tree.root?.left?.value).toBe(5);
      expect(tree.root?.right?.value).toBe(15);
    });

    it('중복된 값을 추가하면 null을 반환', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(5);

      expect(tree.root?.value).toBe(10);
      expect(tree.root?.left?.value).toBe(5);
      expect(tree.root?.right?.value).toBe(15);
      expect(tree.root?.left?.left).toBeNull();
    });
  });

  describe('find()', () => {
    it('루트 노드가 없으면 null을 반환', () => {
      expect(tree.find(10)).toBeNull();
    });

    it('값을 찾으면 해당 노드를 반환', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      const node = tree.find(5);

      expect(node?.value).toBe(5);
    });

    it('값을 찾지 못하면 null을 반환', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      const node = tree.find(20);

      expect(node).toBeNull();
    });
  });
});
