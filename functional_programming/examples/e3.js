import { compose } from '../compose.js';
import { partial } from '../partial.js';

const parseIntBaseTen = partial(parseInt, undefined, 10);
const parseIntBaseEight = partial(parseInt, undefined, 8);

const numberBaseTen = compose(parseIntBaseTen, Math.round);
const numberBaseEight = compose(parseIntBaseEight, Math.round);

console.log(numberBaseTen(15.76));
console.log(numberBaseEight(15.76));

const splitBySpace = (str) => str.split(' ');
const arrayCount = (array) => array.length;

const countWords = compose(arrayCount, splitBySpace);
console.log(countWords(`It's Freaky awesome`));
