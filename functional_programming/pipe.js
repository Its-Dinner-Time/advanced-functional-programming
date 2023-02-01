/** pipe */
// 함수를 합성하는 함수
//  => data flow가 왼 -> 오
export const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((acc, cur) => cur(acc), value);
  };
};
