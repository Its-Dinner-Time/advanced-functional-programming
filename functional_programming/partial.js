/** partial */
export const partial = (fn, ...partialArgs) => {
  const args = [...partialArgs];
  return (...fullArgs) => {
    for (let i = 0, j = 0, ilst = args.length, jlst = fullArgs.length; i < ilst && j < jlst; i++) {
      if (partialArgs[i] === undefined) args[i] = fullArgs[j++];
    }
    return fn(...args);
  };
};
