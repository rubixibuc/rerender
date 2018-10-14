import isObject from "./isObject";

test("should return false for primitives", () => {
  expect(isObject(null)).toEqual(false);
  expect(isObject(undefined)).toEqual(false);
  expect(isObject(1)).toEqual(false);
  expect(isObject("")).toEqual(false);
});

test("should return true for arrays", () => {
  expect(isObject([])).toEqual(true);
  expect(isObject([1])).toEqual(true);
  expect(isObject(new Array())).toEqual(true);
});

test("should return true for constructed primitives", () => {
  expect(isObject(new String(""))).toEqual(true);
  expect(isObject(new Number(1))).toEqual(true);
});

test("should return true for objects", () => {
  expect(isObject({})).toEqual(true);
  expect(isObject(new Object())).toEqual(true);
});
