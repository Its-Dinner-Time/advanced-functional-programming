export const ArrayUtils = (() => {
  return {
    map(array, fn) {
      const result = [];
      for (const item of array) {
        result.push(fn(item));
      }
      return result;
    },

    filter(array, fn) {
      const result = [];
      for (const item of array) {
        if (fn(item)) result.push(item);
      }
      return result;
    },

    flat(array, depth = 1) {
      if (depth <= 0) return array.slice();

      let result = [];
      for (const item of array) {
        result = result.concat(Array.isArray(item) ? this.flat(item, depth - 1) : item);
      }
      return result;
    },

    reduce(array, fn, initVal) {
      let acc = initVal;
      for (const item of array) {
        acc = acc === undefined ? item : fn(acc, item);
      }
      return acc;
    },

    // 두 배열을 합치는 함수
    zip(firstArray, secondArray, fn) {
      const result = [];
      const lst = Math.min(firstArray.length, secondArray.length);
      for (let i = 0; i < lst; i++) {
        result.push(fn(firstArray[i], secondArray[i]));
      }
      return result;
    },

    reverse(array) {
      const reversed = [];
      for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
      }
      return reversed;
    },
  };
})();
