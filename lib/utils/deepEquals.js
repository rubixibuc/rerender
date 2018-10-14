import isStrictlyComparable from "./isStrictlyComparable";
import isObject from "./isObject";

const deepEquals = (source, object, options = {}) => {
  const { partial = false } = options;

  if (
      isStrictlyComparable(source) ||
      isStrictlyComparable(object)
  ) {
    return source === object
  }

  const keys = Object.keys(source);
  const otherKeys = Object.keys(object);
  const length = keys.length;

  if (areBothEmptyArrays(source, object) || areBothEmptyObjects(source, object)) {
    return true;
  }

  if (!partial && length !== otherKeys.length) {
    return false;
  }

  let index = length;
  let key;

  while(index) {
    index--;
    key = keys[index];
    const valuesAreEqual = deepEquals(source[key], object[key], options);

    if (!valuesAreEqual) {
      return false;
    }
  }

  return true;
};

const areBothEmptyArrays = (first, second) => first.length === 0 &&
  second.length === 0 &&
  Array.isArray(first) &&
  Array.isArray(second)

const areBothEmptyObjects = (first, second) => isObject(first) &&
  isObject(second) &&
  Object.keys(first).length === 0 &&
  Object.keys(second).length === 0

export default deepEquals;
