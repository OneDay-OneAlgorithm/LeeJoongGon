class Node {
  data: number | string;

  next: Node | null;

  prev: Node | null;

  constructor(data: number | string) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export default Node;
