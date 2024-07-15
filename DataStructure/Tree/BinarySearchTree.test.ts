import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('insert() 메서드는 이진 탐색 트리에 노드를 추가', () => {
    tree.insert(8);
    tree.insert(7);
    tree.insert(9);

    expect(tree.root?.value).toBe(8);
    expect(tree.root?.left?.value).toBe(7);
    expect(tree.root?.right?.value).toBe(9);
  });
});
