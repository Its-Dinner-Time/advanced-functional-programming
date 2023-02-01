import { curry } from '../curry.js';

// 커링을 활용한 logger
const loggerObject = {
  DEBUG: (initMsg, errorMsg, lineNo) => console.debug(initMsg, `${errorMsg} at line: ${lineNo}`),
  ERROR: (initMsg, errorMsg, lineNo) => console.error(initMsg, `${errorMsg} at line: ${lineNo}`),
  WARN: (initMsg, errorMsg, lineNo) => console.warn(initMsg, `${errorMsg} at line: ${lineNo}`),
};
const logger = (mode, initMsg, errorMsg, lineNo) => {
  const fn = loggerObject[mode];
  if (!fn) throw new Error('not valid mode');
  fn(initMsg, errorMsg, lineNo);
};
const errorLogger = curry(logger)('ERROR')('Error At main.js');

// 배열 요소에서 숫자 검색
const match = curry((regexp, str) => str.match(regexp));
const hasNumber = match(/[0-9]+/);
const filter = curry((fn, array) => array.filter(fn));
const findNumberInArray = filter(hasNumber);
console.log(findNumberInArray(['test', 'test3', '5']));

// 배열의 모든 요소 제곱
const map = curry((fn, array) => array.map(fn));
const squareAll = map((x) => x * x);
console.log(squareAll([1, 2, 3, 4]));
