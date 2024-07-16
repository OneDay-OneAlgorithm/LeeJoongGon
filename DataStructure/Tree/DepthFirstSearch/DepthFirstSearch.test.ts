import BinarySearchTree from '../BinarySearchTree/BinarySearchTree';
import DepthFirstSearch from './DepthFirstSearch';

describe('DepthFirstSearch', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('루트 노드가 없으면 빈 배열을 반환', () => {
    expect(DepthFirstSearch(tree)).toEqual([]);
  });

  it('루트 노드만 있으면 루트 노드만 반환', () => {
    tree.insert(10);

    expect(DepthFirstSearch(tree)).toEqual([tree.root]);
  });

  it('루트 노드와 자식 노드가 있으면 깊이 우선 탐색', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);
    tree.insert(12);
    tree.insert(17);

    expect(DepthFirstSearch(tree).map((node) => node.value)).toEqual([10, 5, 2, 7, 15, 12, 17]);
  });
});
