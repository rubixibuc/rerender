import isObject from "./isObject";

const isStrictlyComparable = (value) => value === value && !isObject(value);

export default isStrictlyComparable;
