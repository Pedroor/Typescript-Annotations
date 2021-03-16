const string: string = `texto ${1}`;
const booleano: boolean = true;
const numero: number = 10.5;
const arr: string[] = ["text1", "text2"]; // ou
const arr2: Array<string> = ["text1", "text2"];
const tuple: [number, boolean] = [2, true];

enum Theme {
  Dark = "dark",
  Light = "light",
}

const all: any = {};

function sum(number1: number, number2: number): number {
  return number1 + number2;
}

function caseNeverOne(): never {
  while (true) {
    console.log("OI");
  }
}

function caseNeverTwo(): never {
  throw new Error("Error");
}

const result = sum(10, 20);

const obj: object = {}; // any object
