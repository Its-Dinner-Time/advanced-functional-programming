/** 함수자 */
class Container {
  constructor(val) {
    this.value = val;
  }

  static of(val) {
    return new this(val);
  }

  map(fn) {
    return Container.of(fn(this.value));
  }
}
