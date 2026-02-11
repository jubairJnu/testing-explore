import { expect, it } from "vitest";
import { numberFn } from "./number";

it("should return array of nummber after sending array of string number", () => {
  const result = numberFn(["1", "2", "3"]);
  expect(result[0]).toBeTypeOf("number");
});
