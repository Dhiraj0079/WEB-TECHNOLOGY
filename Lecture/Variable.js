/************************************************************
 DIFFERENCE BETWEEN var, let, and const
************************************************************/

/*
var:
- Function-scoped (NOT block-scoped)
- Can be re-declared and re-assigned
- Hoisted and initialized with undefined
*/
var name = "Alice";
var name = "Bob"; // allowed (re-declaration)
name = "Charlie"; // allowed (re-assignment)

/*
let:
- Block-scoped (works inside {} like loops or if blocks)
- Cannot be re-declared in the same scope
- Can be re-assigned
- Hoisted but NOT initialized
*/
let age = 25;
// let age = 30; //  Error: cannot re-declare
age = 26; // allowed (re-assignment)

/*
const:
- Block-scoped
- Cannot be re-declared
- Cannot be re-assigned
- Must be initialized at declaration time
*/
const country = "India";
// country = "USA"; //  Error: re-assignment not allowed


/************************************************************
 TYPES OF DATA
************************************************************/

/*
JavaScript data types are divided into:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/


/**********************
 PRIMITIVE DATA TYPES
**********************/

/*
Primitive data types store single values and are immutable
*/

let numberType = 10;            // Number
let stringType = "Hello";       // String
let booleanType = true;         // Boolean
let undefinedType;              // Undefined (no value assigned)
let nullType = null;            // Null (intentional absence of value)
let symbolType = Symbol("id");  // Symbol (unique identifier)
let bigIntType = 123n;          // BigInt (large integers)


/*************************
 NON-PRIMITIVE DATA TYPES
*************************/

/*
Non-primitive data types can store multiple values
and are mutable (can be changed)
*/

let objectType = {
  name: "John",
  age: 30
}; // Object

let arrayType = [1, 2, 3, 4]; // Array (special type of object)

function functionType() {
  return "I am a function";
} // Function (also an object)


/************************************************************
 VARIABLE DECLARATION & typeof OPERATOR
************************************************************/

/*
typeof is used to check the data type of a variable
*/

console.log(typeof numberType);     // "number"
console.log(typeof stringType);     // "string"
console.log(typeof booleanType);    // "boolean"
console.log(typeof undefinedType);  // "undefined"
console.log(typeof nullType);       // "object" (this is a known JS bug)
console.log(typeof symbolType);     // "symbol"
console.log(typeof bigIntType);     // "bigint"
console.log(typeof objectType);     // "object"
console.log(typeof arrayType);      // "object"
console.log(typeof functionType);   // "function"


/************************************************************
 DIFFERENCE BETWEEN null and undefined
************************************************************/

/*
undefined:
- Automatically assigned by JavaScript
- Means a variable has been declared but not assigned a value
*/

let x;
console.log(x);          // undefined
console.log(typeof x);   // "undefined"

/*
null:
- Assigned intentionally by the programmer
- Represents an empty or unknown value
*/

let y = null;
console.log(y);          // null
console.log(typeof y);   // "object" (JavaScript bug)

/*
Key Difference:
undefined → JavaScript gives it
null → Programmer gives it
*/
