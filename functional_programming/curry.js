/** 커링 */
export const curry = (fn) => {
  if (typeof fn !== 'function') throw new Error('curry함수는 function만 인자로 받을 수 있습니다');

  return function curried(...args) {
    if (args.length < fn.length) {
      return (...inArgs) => {
        return curried(...[...args, ...inArgs]);
      };
    }
    return fn.apply(null, args);
  };
};
