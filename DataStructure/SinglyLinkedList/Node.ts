class Node {
  data: number | string;

  next: Node | null;

  constructor(data: number | string) {
    this.data = data;
    this.next = null;
  }
}

export default Node;
