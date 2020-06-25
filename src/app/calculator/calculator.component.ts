import { operations } from './../model';
import { Component } from '@angular/core';

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent {
  currentValue: string;
  history;
  previousValue;
  operatorValue;
  operatorClicked: boolean;

  constructor() {
    this.currentValue = '';
    this.history = '';
    this.previousValue = null;
    this.operatorValue = null;
    this.operatorClicked = false;
  }

  percent = () => {
    this.currentValue = `${parseFloat(this.currentValue) / 100}`;
  }

  sign = () => {
    this.currentValue = this.currentValue.charAt(0) === '-' ? this.currentValue.slice(1) : `-${this.currentValue}`;
  }

  cancel = () => {
    this.currentValue = '';
    this.history = '';
    this.previousValue = null;
    this.operatorValue = null;
    this.operatorClicked = false;
  }

  divide = () => {
    this.operatorValue = operations["/"];
    this.setPrevious();
    this.history += `/`;
  }

  multiply = () => {
    this.operatorValue = operations["x"];
    this.setPrevious();
    this.history += `x`;
  }

  minus = () => {
    this.operatorValue = operations["-"];
    this.setPrevious();
    this.history += `-`;
  }

  plus = () => {
    this.operatorValue = operations["+"];
    this.setPrevious();
    this.history += `+`;
  }

  append = (keyPress) => {
    if (this.operatorClicked) {
      this.currentValue = '';
      this.operatorClicked = false;
    }
    this.currentValue = `${this.currentValue}${keyPress}`;
    this.history += this.currentValue;
  }

  setPrevious = () => {
    this.previousValue = this.currentValue;
    this.operatorClicked = true;
  }

  zero = () => {
    if (parseFloat(this.currentValue) !== 0) {
      this.append('0');
    }
  }

  comma = () => {
    if (this.currentValue.indexOf(',') === -1) {
      this.append(',');
    }
  }

  calculate = () => {
    if (this.operatorValue !== null) {
      this.currentValue = `${this.operatorValue(parseFloat(this.previousValue), parseFloat(this.currentValue))}`;
      this.operatorClicked = false;
      this.previousValue = null;
      this.operatorValue = null;
    }
  }
}
