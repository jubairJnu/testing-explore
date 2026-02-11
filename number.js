import { transferIntoNumber } from "./transferIntoNumber.js";

import { isEmptyString, validateNumber } from "./validate.js";

export const numberFn = (nums) => {
  const numbers = [];
  for (const n of nums) {
    isEmptyString(n);
    const number = transferIntoNumber(n);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
};
