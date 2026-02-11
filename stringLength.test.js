import { expect, it } from "vitest";
import { stringLength } from "./stringLength";

it("should return the length of string", () => {
  expect(stringLength("hello")).toBe(5);
});
