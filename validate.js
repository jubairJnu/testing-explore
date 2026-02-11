export const isEmptyString = (str) => {
  if (str.trim().length === 0) {
    throw new Error("Input Cannot be empty");
  }
};

export const validateNumber = (num) => {
  if (isNaN(num)) {
    throw new Error("Invalid number input");
  }
};
