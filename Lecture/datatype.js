
let anotherId=Symbol("12");
console.log(anotherId);
const id=12;
console.log(id == anotherId)
//Activity :js is dynamic langauge

//Array
const arr=[1,2,3,4,5];
console.log(arr);

//Object

const myobject={
    name:"Dhiraj",
    age:20,
    email:"Dhiraj@gmail.com"
}
console.log(myobject);
console.log(myobject.name);

//Function
//call ,declear,defination

function call(){
    
    console.log("Dhiraj")
}
call();

let a=function myf(){
    console.log("Dhiraj")
}

a();

//Memory 
//types of memory :1.stack --> used for primitive datatypes
//2.heap --> used for non premitive datatypes

let myYname="DSR";
let newYChannel=myYname;
newYChannel="DR";//if ypu change the value of 1st variable it cant affect to 2nd variable
console.log(myYname);
console.log(newYChannel);

//primitive datatypes stores in stack when we assign one variable to another a copy is made so changing one does't affect another

//Heap 
let myobj={
    fname:"Dhiraj",
    age:20,
    id:7
}

let my2=myobj;
my2.id=8;

console.log(my2.id);
console.log(myobj.id);

//when we assign one object to another variable reference is copied not a value when a value of  one variable changed another is also changed
