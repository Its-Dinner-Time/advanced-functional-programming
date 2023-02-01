/** MayBe 함수자 */
export class MayBe {
  constructor(val) {
    this.value = val;
  }

  static of(val) {
    return new this(val);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
  }

  join() {
    return this.isNothing() ? MayBe.of(null) : this.value;
  }

  chain(fn) {
    return this.map(fn).join();
  }
}
