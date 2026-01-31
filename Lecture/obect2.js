//singleton object
const user=new Object;
console.log(user);

const user2={};
user2.name="Dhiraj";
user2.age=20;
user2.email="dhirajregade@gmail.com";
user2.city="Ich";
user2.isLoggedIn=true;
console.log(user2);
const regularUser={
    email:"myemail@gmail.com",
    userDetails:{
        name:"Dhiraj",
        age:21,

    }

}
console.log(regularUser);
console.log(regularUser.userDetails.name);