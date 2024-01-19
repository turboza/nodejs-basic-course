import fs from "fs";
// read the arguments
const args = process.argv;

console.log(args);

const input = args[2];
fs.appendFileSync("data.txt", "\n" + input);
