import BinarySearchTree from '../BinarySearchTree/BinarySearchTree';
import BreadthFirstSearch from './BreadthFirstSearch';

describe('BreadthFirstSearch', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('루트 노드가 없으면 빈 배열을 반환', () => {
    expect(BreadthFirstSearch(tree)).toEqual([]);
  });

  it('루트 노드만 있으면 루트 노드만 반환', () => {
    tree.insert(10);

    expect(BreadthFirstSearch(tree)).toEqual([tree.root]);
  });

  it('루트 노드와 자식 노드가 있으면 너비 우선 탐색', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);
    tree.insert(12);
    tree.insert(17);

    expect(BreadthFirstSearch(tree).map((node) => node.value)).toEqual([10, 5, 15, 2, 7, 12, 17]);
  });
});
