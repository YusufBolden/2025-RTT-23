// Calculator Functions
export function add(a: number = 0, b: number = 0): number {
    return a + b;
  }
  
  export function subtract(a: number = 0, b: number = 0): number {
    return a - b;
  }
  
  export function multiply(a: number = 1, b: number = 1): number {
    return a * b;
  }
  
  export function divide(a: number = 0, b: number = 1): number | null {
    return b === 0 ? null : a / b;
  }
  
  // Function Overloads
  function calculate(value: number): number;
  function calculate(values: number[], asInteger?: boolean): number;
  
//   Function Implementation
  function calculate(input: number | number[], asInteger: boolean = false): number {
    if (typeof input === "number") {
      return input ** 2;
    } else {
      const result = input.reduce((acc, val) => acc + val, 0);
      return asInteger ? Math.floor(result) : result;
    }
  }
  
  export { calculate };
  
  // Apply user-defined rule
  
  export function applyRule(num: number, rule: (n: number) => number): number {
    return rule(num);
  }
  