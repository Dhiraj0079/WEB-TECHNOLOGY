//what is function
//function is a reusable block of code that perform specific task
// function addTWONumbers(num1,num2){
//     console.log("sum is "+(num1+num2));
// }
// addTWONumbers(5,10);
//parameter argument


// function addNumber(a,b){
//     let result=a+b;
//     return result;
//     console.log(result);//after return statement function code doesnot execute
// }
// let sum=addNumber(5,9);
// //stored in variable
// console.log("the sum is "+result);

// function loginUser(username){
//     return `Welcome back,${username};`
// }
// console.log(loginUser("Dhiraj"));
// console.log(loginUser());//when string is empty give undefined
// function myfunction(num1){
//     return num1;
// }
//  console.log(myfunction(200,300,400));
//  //rest operator
//  function mfunction(...num1){
//     return num1;
// }
//  console.log(mfunction(200,300,400));
//  const obj={
//     name:"Dhiraj",
//     age:21,
//     city:"Ich"
//  }
//  function myobj(anyobj){
//     console.log(`my name is ,${anyobj.name}`);
//     console.log(`age is ${anyobj.age}`);
//     console.log(`city is ${anyobj.city}`);
//  }
//  console.log(myobj(obj));
//  const arr=[100,59];
//  function handleArray(anyarr){
//     return anyarr[0];
//  }
//  console.log(handleArray(arr));//100
//  //arrow functions
//  const arrow=(n1,n2)=>n1+n2;
//  console.log(arrow(100,200));
 function chat(){
    username="Dhiraj";
    console.log(this.username);
 }
 chat();
 const arrowfun=()=>{
    username="Dhiraj";
    console.log(this);
 }
 arrowfun();

 //write code for swicth case
 //write code for arrawfuntion
 //write truty and falsy value with exp
 //ternary operator
 //loops in array 5 loops
 //differant between for in and for off loop
 //how to use map and filter functions
 
 //Activity1
 let day=4;
 switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
        break;

 }

 let Grade="A";
 switch(Grade){
    case "A":
    case "B":
        console.log("Excellent");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Need Improvement");
        break;
    default:
        console.log("Fail");


 }
 //Activity 2
 let numbers=[1,2,3,4];



 
 