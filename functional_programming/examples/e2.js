import { partial } from '../partial.js';

const delayTenMs = partial(setTimeout, undefined, 10);
delayTenMs(() => console.log('delayed 10ms'));

const obj = { foo: 'bar', bar: 'foo' };
const obj2 = { bar: 'foo' };

const prettyPrintJson = partial(JSON.stringify, undefined, null, 2);
console.log(prettyPrintJson(obj));
console.log(prettyPrintJson(obj2));
