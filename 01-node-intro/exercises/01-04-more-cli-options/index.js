import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === "r") {
  // read
  const content = fs.readFileSync(filePath, "utf-8");
  console.log(content);
} else if (option === "c") {
  fs.truncateSync(filePath, 0);
} else if (option === "d") {
  // read file
  const content = fs.readFileSync(filePath, "utf-8");

  // append content to the file
  fs.appendFileSync(filePath, "\n" + content);
} else {
  console.log("invalid option");
}
