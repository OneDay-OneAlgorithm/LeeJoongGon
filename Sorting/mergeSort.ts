const merge = (array1: number[], array2: number[]): number[] => {
  const merged: number[] = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] <= array2[pointer2]) {
      merged.push(array1[pointer1]);
      pointer1 += 1;
      continue;
    }

    if (array1[pointer1] > array2[pointer2]) {
      merged.push(array2[pointer2]);
      pointer2 += 1;
    }
  }

  if (pointer1 < array1.length) {
    for (let i = 0; i < array1.length; i++) {
      merged.push(array1[i]);
    }
  }

  if (pointer2 < array2.length) {
    for (let i = 0; i < array2.length; i++) {
      merged.push(array2[i]);
    }
  }

  return merged;
};

const mergeSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middle));
  const rightHalf = mergeSort(array.slice(middle));

  return merge(leftHalf, rightHalf);
};

export default mergeSort;
