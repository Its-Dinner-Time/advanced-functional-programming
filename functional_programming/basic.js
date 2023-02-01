export const foreach = (array, fn) => {
  for (const item of array) fn(item);
};

export const foreachObject = (object, fn) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) fn(key, object[key]);
  }
};

export const unless = (predicate, fn) => {
  if (!predicate) fn();
};

export const times = (number, fn) => {
  for (let i = 0; i < number; i++) fn(i);
};

// 순회하는 배열의 모든 요소가 주어진 조건에 참인지 확인하는 함수
export const every = (arr, fn) => {
  let result = true;
  for (const item of arr) {
    result = result && fn(item);
  }
  return result;
};

// 순회하는 배열의 적어도 하나의 요소가 주어진 조건에 참인지 확인하는 함수
export const some = (arr, fn) => {
  let result = false;
  for (const item of arr) {
    result = result || fn(item);
  }
  return result;
};

// array.sort 의 callback으로 활용하는 함수
export const sortBy = (prop) => {
  return (a, b) => (a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0);
};

// n개의 인자를 받는 함수를 단일 인자만 받게 변환하는 함수
export const unary = (fn) => {
  return fn.length === 1 ? fn : (arg) => fn(arg);
};

// 인자로 받아온 함수를 반드시 한번만 실행하게 하는 함수
export const once = (fn) => {
  let done = false;

  return function () {
    if (done) return;

    done = true;
    fn.apply(this, arguments);
  };
};

// 이전에 실행된 결과를 cache하는 함수
const memorizeByObject = (fn) => {
  const memorized = {};
  return (arg) => memorized[arg] || (memorized[arg] = fn(arg));
};

// memorize함수를 Map을 사용하도록 작성
export const memorize = (fn) => {
  const memorized = new Map();
  return function () {
    return memorized.get(arguments) || memorized.set(arguments, fn.apply(this, arguments));
  };
};
