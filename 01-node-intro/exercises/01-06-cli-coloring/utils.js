import fs from "fs";
import clc from "cli-color"; // new

// var clc = require("cli-color"); // old

const filePath = "data.txt";

const header = clc.blue.bgYellow.bold;

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", clc.red.bgWhite(input));
}

export function read() {
  const content = fs.readFileSync(filePath, "utf-8");
  console.log(header("file content:"));
  console.log(content);
}

export function clear() {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
}
