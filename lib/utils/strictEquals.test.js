import strictEquals from "./strictEquals";

test("should be true for equal primitives", () => {
  expect(strictEquals(1, 1)).toEqual(true);
  expect(strictEquals(null, null)).toEqual(true);
  expect(strictEquals("", "")).toEqual(true);
  expect(strictEquals("non empty string", "non empty string")).toEqual(true);
  expect(strictEquals(true, true)).toEqual(true);
});

test("should be false for non-equal references", () => {
  expect(strictEquals(1, 2)).toEqual(false);
  expect(strictEquals(null, undefined)).toEqual(false);
  expect(strictEquals("", "non empty string")).toEqual(false);
  expect(strictEquals(true, false)).toEqual(false);
});

test("should be true for same reference on objects", () => {
  let nonPrimitive = () => "foo";
  expect(strictEquals(nonPrimitive, nonPrimitive)).toEqual(true);

  nonPrimitive = {};
  expect(strictEquals(nonPrimitive, nonPrimitive)).toEqual(true);

  nonPrimitive = [];
  expect(strictEquals(nonPrimitive, nonPrimitive)).toEqual(true);
});

test("should be false for different references", () => {
  expect(strictEquals(() => "foo", () => "foo")).toEqual(false);
  expect(strictEquals({}, {})).toEqual(false);
  expect(strictEquals([], [])).toEqual(false);
});
