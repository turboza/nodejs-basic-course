import fs from "fs";

// Write a file
fs.writeFileSync("data.txt", "Hello world");
fs.appendFileSync("data.txt", "\nSecond line");

// Read a file
const result = fs.readFileSync("data.txt", "utf-8");
console.log(result);
