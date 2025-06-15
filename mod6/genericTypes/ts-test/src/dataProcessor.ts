type StringOrNumberArray = string[] | number[];

function formatData(input: StringOrNumberArray): string {
  if (isStringArray(input)) {
    return input.map(str => str.toUpperCase()).join(', ');
  } else {
    return input.map(num => num.toFixed(2)).join(', ');
  }
}

function isStringArray(input: StringOrNumberArray): input is string[] {
  return typeof input[0] === 'string';
}

// === Test examples ===
const strings: string[] = ['Yusuf', 'Bolden', 'house'];
const numbers: number[] = [1, 1.414, 1.732];
console.log("Formatted Strings:", formatData(strings));
// Output: "YUSUF, BOLDEN, HOUSE"

console.log("Formatted Numbers:", formatData(numbers));
// Output: "1.00, 1.41, 1.73"