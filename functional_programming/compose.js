import { ArrayUtils } from './array-util.js';

/** compose */
// 함수를 합성하는 함수
//  => data flow가 오->왼
export const compose = (...fns) => {
  return (value) => {
    return ArrayUtils.reverse(fns).reduce((acc, cur) => cur(acc), value);
  };
};
