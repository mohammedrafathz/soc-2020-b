// scope
//where to look for things

x = 42;
console.log(x); //42

//**************/ */

var teacher = "tommy";

function otherClass() {
  teacher = "john";
  console.log(teacher);
  console.log("welcome !");
}

function ask() {
  var question = "Why ?";

  console.log(question);
}

console.log(teacher); // tommy
otherClass();
ask();

///////////***************/ */

var teacher = "tommy";

function otherClass() {
  teacher = "john";
  topic = "DOM";
  console.log("welcome !");
}

otherClass();
console.log(teacher);
topic;

///*********************** */
function foo(a) {
  console.log(a);
}

foo(2); // 2

///*********************** */
// example 2
function foo(a) {
  var b = a;

  return a + b;
}

c = foo(2);
console.log(c);

//****************** */
var teacher = "tommy";

function otherClass() {
  // debugger
  var teacher = "john";
  var topic = "DOM";
  console.log("welcome !");
}

otherClass();
console.log(topic);
//****************** */
var teacher = "tommy";

function otherClass() {
  teacher = "john";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}

otherClass();
ask("???");

//********lexical scope**************** */

//function declaration
function teacher() {
  /** */
}

//function expression
var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher);
};

console.log(teacher);
console.log(myTeacher);
// console.log(anotherTeacher)

///
function foo(a) {
  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);

//****/ */
function foo(a) {
  let b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);

/////////////////////////////////

// ****** Named Function Expression********//

//anon function expreesion
var clickHandler = function () {
  //
};

var keyHandler = function keyHandler() {
  //
};

// self-reference
//more debuggable stack trace
//more self-documenting code

// precedence
//(Named) function declaration
// >
// Named function expression
// >
//Annonymous funciton expression

// dynamic scope
var teacher = "tommy";
function otherClass() {
  var teacher = "john";

  function ask(question) {
    console.log(teacher, question);
  }
  ask("why?");
}

// ******************//
// Function Scoping

var teacher = "tommy";

function anotherTeacher() {
  var teacher = "john";
  console.log(teacher);
}

anotherTeacher();
console.log(teacher);

////////****************** */

var teacher = "tommy";

function anotherTeacher() {
  var teacher = "john";
  console.log(teacher); // john
}

anotherTeacher();
console.log(teacher); //tommy

/////////*************** */
// fucntion scoping
var teacher = "tommy";

(function anotherTeacher() {
  var teacher = "john";

  console.log(teacher); //john
})();

console.log(teacher); // tommy

//****************** */
var teacher = "tommy";

(function anotherTeacher(teacher) {
  console.log(teacher); // john
})("john");

console.log(teacher); // tommy

///************* */
var a = 2;

function foo() {
  var a = 3;

  console.log(a); // 3
} // <-- and this
foo(); // <-- and this

console.log(a); // 2

///*********************** */

var a = 2;

(function foo() {
  a = 3;
  console.log(a); // 3
})();

console.log(a); // 3

////////////////******************* */
// Blocks As Scopes
for (var i = 0; i < 10; i++) {
  console.log(i);
}
/////////////******************** */
var teacher = "tommy";

{
  let teacher = "john";

  console.log(teacher); // john
}

console.log(teacher); // tommy

//**************** */
function diff(x, y) {
  if (x > y) {
    var tmp = x;

    x = y;
    y = tmp;
  }
  return y - x;
}

console.log(diff(10, 20)); // 10
console.log(tmp);
/////*************** */
function diff(x, y) {
  if (x > y) {
    console.log(tmp);
    let tmp = x;

    x = y;
    y = tmp;
  }
  return y - x;
}

console.log(diff(10, 20)); // 10
// console.log(tmp);

///////////********var****** */

function repeat(fn, n) {
  var result;

  for (var i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

let finalResult = repeat(
  function (result, n) {
    console.log(result, n);
    return "looping";
  },
  5
);
console.log(finalResult);

//////////////************* */
// let + var
function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

/////////////////
// const
var teacher = "tommy";
teacher = "john";

const otherteacher = teacher;
otherteacher = "peter"; // errror

const allTeachers = ["tommy", "john"];
allTeachers[1] = "peter ";

///////////************************ */
// var exammples
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter);

//////*********************************let */
let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";

  console.log(hello);
}

console.log(hello);

//////**************************** */

const greeting = "say Hi";
greeting = "say Hello instead"; /// cannot reassign

//example 2
const greeting = "say Hi";
const greeting = "say Hello instead";

/////*************************************** */

// Hoisting

// student
// teacher
var student = "tommy ";
var teacher = "john ";

var student;
var teacher;

student;
teacher;

/////*************************************** */

var unknownVar;
var topLevelVar =
  "Since this variable was declared outside of a function, it'll go on the global scope.";

function topLevelFn() {
  var localVar = "This variable should be local to topLevelFn's scope";

  function nestedFn() {
    var anotherLocalVar = "Local to nestedFn's scope.";
    var access =
      "Because of the scope chain, in this function we still have access to any of the variable declared in topLevelFn or the global scope.";

      console.log(unknownVar);
    console.log(localVar);
    console.log(topLevelVar); //379
  }

  nestedFn();
}

var fnExpression = function () {
  var hoisted =
    "Did you notice that fnExpression is a function expression? It's declaration is hoisted and set to undefined in the 'creation' phase.";
};

fnExpression();
topLevelFn();
