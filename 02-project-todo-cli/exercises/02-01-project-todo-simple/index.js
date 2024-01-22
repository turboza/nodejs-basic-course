import fs from "fs";
import clc from "cli-color";

const args = process.argv;

const option = args[2];
const input = args[3];

const filePath = "data.txt";

// add
if (option === "add") {
  printAppHeader();
  fs.appendFileSync(filePath, input + "\n");
  console.log(`Todo "${input}" was added.`);
}
// list
else if (option === "list") {
  printAppHeader();
  const content = fs.readFileSync(filePath, "utf-8");
  const todoList = content.trim().split("\n");

  // count
  const count = todoList.length;
  console.log(`Total todos: ${count} items.\n`);

  // print list
  for (let i = 0; i < todoList.reverse().length; i++) {
    console.log(`${i + 1}. ${todoList[i]}`);
  }
}
// clear
else if (option === "clear") {
  printAppHeader();
  fs.writeFileSync(filePath, "");
  console.log("All todos are cleared.");
}

function add(input) {}

function printAppHeader() {
  console.log(clc.blue.bgYellow("== Todo App ==\n"));
}
