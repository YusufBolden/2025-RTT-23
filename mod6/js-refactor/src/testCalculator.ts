import {
    add,
    subtract,
    multiply,
    divide,
    calculate,
    applyRule
  } from './advancedCalculator';
  
  // Calculator Tests
  console.log("Add:", add(5, 3));                  // 8
  console.log("Subtract:", subtract(10, 4));       // 6
  console.log("Multiply:", multiply(6, 7));        // 42
  console.log("Divide (valid):", divide(12, 4));   // 3
  console.log("Divide (zero):", divide(10, 0));    // null
  
  // Overload Tests
  console.log("Calculate square:", calculate(5));                   // 25
  console.log("Calculate sum:", calculate([1, 2, 3.5]));            // 6.5
  console.log("Calculate sum (integer):", calculate([1.2, 2.4], true)); // 3
  
  // Rule Application
  const roundToTenth = (n: number) => Math.round(n * 10) / 10;
  const roundToHundredth = (n: number) => Math.round(n * 100) / 100;
  
  console.log("Rounded to tenth:", applyRule(5.678, roundToTenth));       // 5.7
  console.log("Rounded to hundredth:", applyRule(5.678, roundToHundredth)); // 5.68
  