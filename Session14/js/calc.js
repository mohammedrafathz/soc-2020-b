// accept input a, b values from user and also accept type 
// operation he want perform

let inputA = +prompt("Enter A value");
let operation = prompt("Enter type of operation");
let inputB = +prompt("Enter B value");


// Arithmetic functions
function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function mod(a, b){
    return a % b;
}

function power(a, b){
    return a ** b;
}


switch (operation) {
    case "add":
      console.log(add(inputA, inputB));
        break;
    case "sub":
      console.log(sub(inputA, inputB));  
        break;
    case "mul":
        console.log(mul(inputA, inputB)); 
        break;
    case "div":
        console.log(div(inputA, inputB));
        break;
    case "mod":
        console.log(mod(inputA, inputB));
        break;
    case "pow":
        console.log(power(inputA, inputB));
        break;
    default:
        console.log("You have selected invalid option.");
        break;
}
