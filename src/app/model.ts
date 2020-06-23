export interface key {
  type: string;
  value: string;
}

export interface history {
  operation: Function;
  leftNum: number;
  rightNum: number;
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