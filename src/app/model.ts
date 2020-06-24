export interface operations {
  operation: Function;
}

const add: Function = (a: number, b: number): number => a + b;
const substract: Function = (a: number, b: number): number => a - b;
const divide: Function = (a: number, b: number): number => a / b;
const multiply: Function = (a: number, b: number): number => a * b;

export const operations: { [index: string]: Function } = {
  "+": add,
  "-": substract,
  "/": divide,
  "*": multiply,
};