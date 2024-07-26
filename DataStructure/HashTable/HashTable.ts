type ColorTuple = [string, string];

class HashTable {
  private data: ColorTuple[][];

  constructor(size: number = 31) {
    this.data = new Array(size);
  }

  #hash(key: string) {
    let total = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key.charCodeAt(i) - 96;
      total = (total * PRIME_NUMBER + value) % this.data.length;
    }

    return total;
  }

  test() {
    console.log(this.#hash('name'), this.#hash('mane'));
  }

  set(key: string, value: string) {
    const hash = this.#hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    const tuple = this.data[hash].find((color) => color[0] === key);

    if (tuple) {
      tuple[1] = value;
    } else {
      this.data[hash].push([key, value]);
    }
  }

  get(key: string): string | undefined {
    const hash = this.#hash(key);

    if (!this.data[hash]) {
      return undefined;
    }

    const tuple = this.data[hash].find((color) => color[0] === key);
    return tuple ? tuple[1] : undefined;
  }

  keys(): string[] {
    const result = this.data
      .filter((bucket) => bucket)
      .flatMap((bucket) => bucket.map((color) => color[0]));

    return result;
  }

  values(): string[] {
    const result = this.data
      .filter((bucket) => bucket)
      .flatMap((bucket) => bucket.map((color) => color[1]));

    return Array.from(new Set(result));
  }
}

export default HashTable;
