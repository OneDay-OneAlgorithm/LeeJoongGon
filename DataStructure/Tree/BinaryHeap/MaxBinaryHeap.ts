class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  insert(value: number) {
    this.values.push(value);
    this.#bubbleUp();
  }

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const max = this.values.pop();

    this.#sinkDown();

    return max;
  }

  #bubbleUp() {
    let currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[parentIndex] < this.values[currentIndex]) {
        [this.values[parentIndex], this.values[currentIndex]] = [
          this.values[currentIndex],
          this.values[parentIndex],
        ];

        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  #sinkDown() {
    let parentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * parentIndex + 1;
      const rightChildIndex = 2 * parentIndex + 2;

      let leftChild;
      let rightChild;
      let largerChildIndex = null;

      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > this.values[parentIndex]) {
          largerChildIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (largerChildIndex === null && rightChild > this.values[parentIndex]) ||
          (largerChildIndex !== null && rightChild > leftChild!)
        ) {
          largerChildIndex = rightChildIndex;
        }
      }

      if (largerChildIndex === null) {
        break;
      }

      [this.values[parentIndex], this.values[largerChildIndex]] = [
        this.values[largerChildIndex],
        this.values[parentIndex],
      ];

      parentIndex = largerChildIndex;
    }
  }
}

export default MaxBinaryHeap;
