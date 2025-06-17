// let products = [
//     { shoe: "colors", price: 2000 },
//     { shoe: "stylo", price: 2100 },
//     { shoe: "addidas", price: 2200 },
//     { shoe: "nike", price: 2300 },
//     { shoe: "jordon", price: 2400 },
//     { shoe: "milli", price: 2500 },
//     { shoe: "J.S shoe", price: 2600 },
//     { shoe: "noor", price: 2700 },
//     { shoe: "step 1", price: 2700 },
//     { shoe: "metro", price: 2800 },
//     { shoe: "kicks", price: 2800 },
//     { shoe: "additions", price: 2900 },
// ];

// const { use } = require("react");

// const { useReducer } = require("react");

// let totalPrice = products.reduce((acc, item) => acc + item.price, 0);
// console.log(" Total price using reduce():", totalPrice);

// for (let i = 0; i < products.length; i++) {
//     let currentObject = products[i];
//     let nestedSum = 0;

//     for (let j = 0; j < products.length; j++) {
//         nestedSum += products[j].price;
//     }

//     console.log(` Price = ${currentObject.price}, Total Price = ${nestedSum}`);
// }


// settimeout function 

// function sum(a,b){
//     console.log(a+b);
// }
// setTimeout(function(a,b){
//     sum(1,3);
// }, 2000);

// Callback function 

// function helo(){
//     console.log("heloo");
// }

// function hy(gethelo){
//     gethelo();
//     console.log("hyy");
// }
// hy(helo);

// return function 

// function printvaraible(a){
//     return a;
// }
// console.log(printvaraible(5));

// 1 arrguments print using arrow function

// let print = a => a;
// console.log(print(5));      


// 2 arrguments print using arrow function

// let print = (a,b) => a+b;
// console.log(print(5,3));

// let isloggedin =0;
// let option = isloggedin == 1 ? "logout" : "logedin";
// document.writeln(option);

// let user ;
// alert (user ?? "guest user");


// // Q4: Misleading Array Trick
// let list = [2]; list[5] = 7; console.log(list.length);

// let x = 0; 
// for (let i = 0; i < 3; i++) { 
//  x += i;
//  } 
// console.log(x);

// for (var i = 0; i < 3; i++) { 
//   setTimeout(() =>
// console.log(i),
//   100); }


// let arr = [1, 2, 3]; arr.length = 1; console.log(arr);
// console.log(a); 
// var a = 10;

// for (let i = 0; i < 5; i++); { console.log(i); }


// What will the following expression return?

// console.log(0 || "hello");


// const greet = function(name) { return "Hello " + name; }; console.log(greet("Ali"));

// function sayHi(name = "Guest") { console.log("Hi " + name); } sayHi();

// let user = prompt("enter your B.Date");
// let x = new Date(user)
// alert(x);
// let birthday = new Date(prompt("Enter your birthday (e.g., 2000-01-01):"));
// let today = new Date();

// let today_time = today.getTime();
// let bday_time = birthday.getTime();

// let age_time = today_time - bday_time;
// console.log("Age time in milliseconds: " + age_time);

// let age = Math.floor(age_time / (1000 * 60 * 60 * 24 * 365.25));

// alert("Your age is " + age);


// function   

// function helo(){
//     console.log("welcom to my shoe shop KAKA FOOT WEAR");
// }
// helo();
// helo();
// helo();
// helo();
// helo();
// helo();
// helo();
// helo();
// helo();

// function showTime() {
//     let currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();

//     console.log("Current time is " + hours + ":" + minutes);
// }

// showTime();


// function studentData(name, age, department, semester) {
//     console.log(`Student Data:
//     Name: ${name}
//     Age: ${age}
//     Department: ${department}
//     Semester: ${semester}`);
// }
// studentData("Y.K", 23, "Computer Science", 4);

