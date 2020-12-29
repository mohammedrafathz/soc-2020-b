const readlineSync = require("readline-sync");

function initCalc() {
  const num1 = parseInt(readlineSync.question("Enter Num1: "));
  const num2 = parseInt(readlineSync.question("Enter Num2: "));
  const operation = readlineSync.question("Enter operation type: ");

  if (operation === "add") {
    console.log(num1 + num2);
  } else if (operation === "sub") {
    console.log(num1 - num2);
  } else if (operation === "mul") {
    console.log(num1 * num2);
  } else if (operation === "div") {
    console.log(num1 / num2);
  } else if (operation === "mod") {
    console.log(num1 % num2);
  } else if (operation === "pow") {
    console.log(num1 ** num2);
  } else {
    console.log("Please enter correct operation.");
  }

  const cont = readlineSync.question("Do you want to continue?(Y/n)");
  if (cont === "yes" || cont === "y") {
    initCalc();
  } else {
    return;
  }
}

initCalc();
