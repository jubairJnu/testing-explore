import { expect, it } from "vitest";
import { add } from "./math";

it("should return the correct sum , if array of number is provided", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});

it("should rerutn sum", () => {
  try {
    const result = add();
  } catch (error) {
    expect(error).toBeDefined();
  }
});

it("should rerutn sum with fn", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

// it("should rerutn sum", () => {
//   const resultFn = () => {
//     add([1,2,3]);
//   };
//   expect(resultFn).toThrow();
// });
