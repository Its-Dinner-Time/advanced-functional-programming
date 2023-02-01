export const Either = (() => {
  class Some {
    constructor(val) {
      this.value = val;
    }

    static of(val) {
      return new this(val);
    }

    map(fn) {
      return Some.of(fn(this.value));
    }
  }

  class Nothing {
    constructor(val) {
      this.value = val;
    }

    static of(val) {
      return new this(val);
    }

    map(_fn) {
      return this;
    }
  }

  return { Some, Nothing };
})();
