/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    // Initializing result variable
    this.result = 0;
  }

  // add: takes a number and adds it to the result
  add(number) {
    this.result += number;
  }

  // subtract: takes a number and subtracts it from the result
  subtract(number) {
    this.result -= number;
  }

  // multiply: takes a number and multiply it to the result
  multiply(number) {
    this.result *= number;
  }

  // divide: takes a number and divide it to the result
  divide(number) {
    if (number == 0) {
      throw new ZeroDivisionError("Cannot divide by zero");
    }
    this.result /= number;
  }

  // clear: makes the `result` variable to 0
  clear() {
    this.result = 0;
  }

  // getResult: returns the value of `result` variable
  getResult() {
    return this.result;
  }

  // calculate: takes a string expression which can take multi-arithmetic operations and give its result
  calculate(expression) {
    expression = expression.replace(/\s+/g, '');
    if (/([a-zA-Z])/.test(expression)) {
      throw new Error('Invalid expression!')
    }
    this.result = eval(expression);
    if (!isFinite(this.result)) {
      throw new Error("Cannot divide by zero!")
    }
  }
}

module.exports = Calculator;
