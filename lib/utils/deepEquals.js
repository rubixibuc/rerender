import isStrictlyComparable from "./isStrictlyComparable";
import isObject from "./isObject";

const deepEquals = (a, b, options = {}) => {
  const { partial = false } = options;

  if (isStrictlyComparable(a) || isStrictlyComparable(b)) {
    return a === b;
  }

  const keys = Object.keys(a);
  const otherKeys = Object.keys(b);
  const length = keys.length;

  if (
    (Array.isArray(a) && Array.isArray(b) && isEmpty(a) && isEmpty(b)) ||
    (isObject(a) &&
      isObject(b) &&
      isEmpty(Object.keys(a)) &&
      isEmpty(Object.keys(b)))
  ) {
    return true;
  }

  if (!partial && length !== otherKeys.length) {
    return false;
  }

  let index = length;
  let key;

  while (index) {
    index--;
    key = keys[index];
    const valuesAreEqual = deepEquals(a[key], b[key], options);

    if (!valuesAreEqual) {
      return false;
    }
  }

  return true;
};

const isEmpty = arr => arr.length === 0;

export default deepEquals;
