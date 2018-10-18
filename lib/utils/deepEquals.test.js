import deepEquals from "./deepEquals";

test("should match primitives", () => {
  expect(deepEquals(null, null)).toEqual(true);
  expect(deepEquals(1, 1)).toEqual(true);
  expect(deepEquals("", "")).toEqual(true);
  expect(deepEquals(undefined, undefined)).toEqual(true);

  expect(deepEquals(1, 2)).toEqual(false);
  expect(deepEquals("foo", "bar")).toEqual(false);
  expect(deepEquals(null, undefined)).toEqual(false);
});

test("should perform deep equality checks on objects", () => {
  expect(deepEquals([], [])).toEqual(true);
  expect(deepEquals([1], [1])).toEqual(true);
  expect(deepEquals({}, {})).toEqual(true);
  expect(deepEquals({ foo: 1 }, { foo: 1 })).toEqual(true);
  expect(deepEquals({ foo: { bar: 1 } }, { foo: { bar: 1 } })).toEqual(true);

  expect(deepEquals([], null)).toEqual(false);
  expect(deepEquals(null, [])).toEqual(false);
  expect(deepEquals({}, null)).toEqual(false);
  expect(deepEquals(null, {})).toEqual(false);
  expect(deepEquals([1], [2])).toEqual(false);
  expect(deepEquals([1], [1, 2, 3])).toEqual(false);
  expect(deepEquals({ foo: 1 }, { foo: 2 })).toEqual(false);
  expect(deepEquals({ foo: { bar: 1 } }, { foo: { bar: 2 } })).toEqual(false);
  expect(deepEquals({ foo: { bar: 1 } }, { foo: { baz: 2 } })).toEqual(false);
});

test("should perform partial deep equality checks", () => {
  const options = { partial: true };

  expect(deepEquals({ foo: 1 }, { bar: 2, foo: 1 }, options)).toEqual(true);
  expect(
    deepEquals({ foo: 1, bar: 2 }, { foo: 1, bar: 2, baz: 3 }, options)
  ).toEqual(true);
  expect(deepEquals([1], [1, 2, 3], options)).toEqual(true);
  expect(
    deepEquals({ foo: 1, bar: 1 }, { foo: 1, bar: 2, baz: 3 }, options)
  ).toEqual(false);
});
