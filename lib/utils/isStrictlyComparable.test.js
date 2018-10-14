import isStrictlyComparable from "./isStrictlyComparable";

test("should return true for undefined, null, strings, and numbers", () => {
  expect(isStrictlyComparable(null)).toEqual(true);
  expect(isStrictlyComparable(undefined)).toEqual(true);
  expect(isStrictlyComparable("")).toEqual(true);
  expect(isStrictlyComparable(1)).toEqual(true);
  expect(isStrictlyComparable(Infinity)).toEqual(true);
});

test("should return false for arrays, objects, and NaN", () => {
  expect(isStrictlyComparable([])).toEqual(false);
  expect(isStrictlyComparable({})).toEqual(false);
  expect(isStrictlyComparable(NaN)).toEqual(false);
});
