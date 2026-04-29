// const: it can't be reassigned & redeclared
const accno = 2001;
// accno = 1002; // ❌ Not allowed
console.log(accno);


// let: block scope, can't redeclare in same scope
// var: function/global scope, can redeclare & reassign

// let a = 10;
// var b = 20;

// {
//     let a = 100;
//     var b = 200;
//     console.log(`inside block ${a} ${b}`);
// }

// console.log(a, b);


// Variable Declaration

let user_accno = 10;
console.log(`type of user_accno : ${typeof user_accno}`);
console.log(`value of user_accno : ${user_accno}`);

let user_name = "Dhiraj";
console.log(`type of user_name : ${typeof user_name}`);
console.log(`value of user_name : ${user_name}`);

let isActive = true;
console.log(`type of isActive : ${typeof isActive}`);
console.log(`value of isActive : ${isActive}`);

let balance = 202000n;
console.log(`type of balance : ${typeof balance}`);
console.log(`value of balance : ${balance}`);

let empty;
console.log(`type of empty : ${typeof empty}`);
console.log(`value of empty : ${empty}`);

let n = null;
console.log(`type of n : ${typeof n}`); // object (JS bug)
console.log(`value of n : ${n}`);

let id = "2";
let sym = Symbol(id);
console.log(`type of sym : ${typeof sym}`);
console.log(sym);