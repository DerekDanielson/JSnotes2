// Global Scope and Functions
/* Variables which are defined outside of a function block have "Global Scope".  Means they can be seen everywhere 

Variables that are declared without 'let' or 'const' keywords are automatically created in the "Global scope.  Can create unintended consequences elsewhere in the code or when running a function again.
Always declare variables with 'let' or 'const'.*/
let globalScope = 10; // --Outside of function

function newFunction() {
    return 5;
}



// Local Scope and Functions
/* Variables which are declared within a function, and the function parameters, have "Local scope".  Only visible within the function */
function newFunc() {
    const dog = "Sadie";
    console.log(dog);
}

newFunc();
// Sadie
console.log(dog);
// Gives error since dog is not defined outside the function



// Global vs Local Scope in Functions
/* It's possible to have both local and global variables with the same name.  When this is done, local variables take precedence over the global variable */



// Understanding Value returned from a Function
/* If a function doesn't have a "return" statement, when called, the function processes the inner code but the returned value is 'undefined' */
let sum = 0;

function addSum(num) {
    sum = sum + num;
}

addSum(3);
/* The function will change the global "sum" variable but the returned value of the function is 'undefined'. */



// Assignment with a Returned Value
/* Can take the return value of a function and assign it to a variable */
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);



// Queue is an abstract Data Structure where items are kept in order
/* New items are added to back of the queue and old items are taken off from the front of the queue */
function nextInLine(arr, item){
  arr.push(item);
  var removed = arr.shift();
  return removed;
}

const defaultArr = [1, 2, 3, 4, 5, 6];

nextInLine([], 7);
//1 and [2,3,4,5,6,7]



//Boolean Values
/* Booleans may be "true" or "false" values.  Basically on-off switches.  "true" is on and "false" is off. These two states are mutually exclusive */



//Conditional Logic with If statements
/* "if" statements are used to make decisions.  Keyword "if" tells JS to execute the code in the curly braces under certain conditions, defined in the parentheses.  These conditions are Boolean conditions.

When the condition evaluates to "true", the program executes the statement inside the curly braces.  When Boolean condition evaluates to "false", the statement inside the curly braces will not execute */
/*
if (condition is true) {
  statement is executed
}
*/
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
