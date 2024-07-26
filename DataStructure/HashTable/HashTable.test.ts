import HashTable from './HashTable';

describe('HashTable', () => {
  let hashTable: HashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  describe('set()', () => {
    test('이미 같은 키를 가지는 요소가 존재하면 값을 덮어씀', () => {
      hashTable.set('red', '#FF0000');
      hashTable.set('red', '#FF0001');
      expect(hashTable.get('red')).toBe('#FF0001');
    });
  });

  describe('get()', () => {
    test('주어진 키에 해당하는 요소의 값을 반환', () => {
      hashTable.set('blue', '#0000FF');
      expect(hashTable.get('blue')).toBe('#0000FF');
    });

    test('키에 해당하는 요소가 존재하지 않을 경우 undefined 반환', () => {
      expect(hashTable.get('green')).toBeUndefined();
    });
  });

  describe('keys()', () => {
    test('모든 key 값을 반환', () => {
      hashTable.set('red', '#FF0000');
      hashTable.set('green', '#00FF00');
      hashTable.set('blue', '#0000FF');
      const keys = hashTable.keys();
      expect(keys).toContain('red');
      expect(keys).toContain('green');
      expect(keys).toContain('blue');
      expect(keys.length).toBe(3);
    });

    test('키가 존재하지 않으면 빈 배열을 반환', () => {
      expect(hashTable.keys()).toEqual([]);
    });
  });

  describe('values()', () => {
    test('모든 value 값을 반환', () => {
      hashTable.set('red', '#FF0000');
      hashTable.set('darkred', '#8B0000');
      hashTable.set('green', '#00FF00');
      hashTable.set('blue', '#0000FF');
      const values = hashTable.values();
      expect(values).toContain('#FF0000');
      expect(values).toContain('#8B0000');
      expect(values).toContain('#00FF00');
      expect(values).toContain('#0000FF');
      expect(values.length).toBe(4);
    });

    test('중복되는 value가 있을 경우 고유한 value를 반환', () => {
      hashTable.set('red', '#FF0000');
      hashTable.set('crimson', '#FF0000');
      hashTable.set('green', '#00FF00');
      const values = hashTable.values();
      expect(values).toContain('#FF0000');
      expect(values).toContain('#00FF00');
      expect(values.length).toBe(2);
    });

    test('값이 존재하지 않으면 빈 배열을 반환', () => {
      expect(hashTable.values()).toEqual([]);
    });
  });

  describe('해시 충돌 해결', () => {
    test('해시 값의 충돌이 발생했을 경우 배열 형태로 저장', () => {
      const smallHashTable = new HashTable(2); // Force collisions
      smallHashTable.set('name', 'John');
      smallHashTable.set('mane', 'Lion');
      expect(smallHashTable.get('name')).toBe('John');
      expect(smallHashTable.get('mane')).toBe('Lion');
    });
  });
});
