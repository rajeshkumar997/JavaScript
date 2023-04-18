////////////////Hoisting///////////             

// var x = 7;
// function getName() {
//     console.log("namaste javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

///////////How functions works in javascript///////

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

////////////////////////Scope chain and lexical environment////////

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

///////////////let ans const / temporal dead zone//////////////

// let a = 10;
// console.log(a);
// var b = 100;

/////////////////Block scope & Shadowing in js /////////////

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

////////////////////  CLOSURE     ///////////////////

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function z() {
//     var b = 99;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

////////////////////////Function Statement & Function Decleration //////////////////////////////

// function a() {
//     console.log("a called");
// }
// a();

////////////////////////Function Expression //////////////////////////////

// var b = function () {
//     console.log("b called");
// }
// b();


//////////////////////// Anonymus Function //////////////////////////////

// function () {

// }

//////////////////////// Named Function Expression //////////////////////////////

// var b = function xyz() {
//     console.log("b called");
// }
// b();
// xyz();   // Uncaught ReferenceError: xyz is not defined

////////////////////////Difference between parameters and argument //////////////////

// var b = function (param1, param2) {
//     console.log("b called");
// }
// b(1, 2);

//////////////////////// First class function //////////////////////////////

//the abilities of functions to be used as values and can be passed as argument to the other function can be ruturned from function is this ability is known as first class function in javascript.
// var b = function (param1) {
//     return function xyz() {

//     }
// }
// console.log(b());

///////// what is callback function in javascript ////////////

// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// })


/////////////////// Frontend DSA interview question in javascript ///////////////

// question - 1 >>>>> write code for palindrome number in javascript
//  input : x = 121 ------>>>>>>>> output - true;
//  input : x = 10 ------>>>>>>>> output - false;

// const isPalndrome = function (x) {
//     if (x < 0) return false;
//     return x == +x.toString().split("").reverse().join("");
//     ///// or / /////
//     // return x < 0 ? false : (x == +x.toString().split("").reverse().join(""));
// }
// const res = isPalndrome(21);
// console.log(res);

// //////////////     question - 2 >>>>>>> Fabonacci Number     /////////////////////////
// fabonacci series -> 0, 1, 1, 2, 3, 5, 8, 13, 21
// f(0) = 0, f(1) = 1
// f(n) = f(n - 1) + f(n - 2), for n > 1 

// input: n = 3  ------->>>>>>> output = 2

// var fab = function (n) {
//     const arr = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr[n];
//     // console.log(arr);
// }
// fab(5);

////////////////>>>>>>>>>>>solve this problemusing recursion <<<<<<<<<<<<<<<////////////

// const fib = function (n) {
//     if (n <= 1) return n;

//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(3));


///////////////           Question - 3 - Valid Anagrams    ////////////////
// An Anagram is a word or phrase formed by rearranging the 
// letters of a different word or phrase, using all the original letters exactly once

////input: (s = "anagram"), (t = "nagaram");  ------ output : true
////input: (s = "rat"), (t = "car");  ------ output : false


//////////   let , const , var   ///////////////
/////////////////////          scope   /////

// {
//     let a = 10;
// }
// console.log(a);

////////////////////////          variable shadowing        ///////////////

// function test() {
//     let a = "Hello";

//     if (true) {
//         let a = "hello";
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

/////// This is called variable shadowing ///////
//// if we are trying to shadow let variable by var variable this is callet illigal shadowing and its give error that variable is already defined

// function test() {
//     var a = "Hello";  // if we are trying to shadow 'var' variable by using 'let' then this is ok
//     let b = "Bye";     // if we are trying to shadow 'let' variable by using 'var' then this gives us error

//     if (true) {
//         let a = "Hi";
//         var b = "good bye"
//         console.log(a);
//         console.log(b);
//     }
// }
// test();


//////// so let and const can not be re-declare in same scope but var can be re-declared in the same scope
/////////ex    const a;    let a;
// const a;     let a;

// let a;
// {
//     let a;           ////this is ok////
// }


//////////         declaration without initialisation        ///////////

// let a = 5;
// a = 6;
// console.log(a)


/////////////////////////////       Hoisting        ////////////////////

// During the creation phase javascript engines move your variables and function declaration on 
// top of code and this is known as hoisting;

// console.log(count);
// let count = 1;

// console.log(count);
// var count = 1;

// console.log(count);
// const count = 1;

// function abc() {
//     console.log(a, b, c);

//     const c = 8;
//     let b = 3;
//     var a = 5;
// }
// abc();



//////////////////       MAP --  FILTER  -- REDUCE   ////////////

/////                         what is map           ////////////

//  the map method is use for creating a new array from existing one by applying a function to each one 
//    of the elements of the first array

// const nums = [1, 2, 3, 4];
// const mult = nums.map((num, i, arr) => {
//     return num * 3;
// })
// console.log(mult);

/////                         what is filter           ////////////

// the filter methods takes each elements in array and applies a conditional statement against it 
//   and if the conditionals returns true the elements get pushed into output array and if the 
//   conditions returns false then the element does not get pushed into output of the array.

// const nums = [1, 2, 3, 4];
// const morethantwo = nums.filter((num) => {
//     return num > 2;
// })
// console.log(morethantwo);

/////                         what is reduce           ////////////

//  the reduce method reduce the array of values to down just one value.
// just like map and filter reduce also executes the callback for each element of the array.

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((pre, curr, i, arr) => {
//     return pre + curr;
// }, 0)
// console.log(sum);


/////////////                 Polyfill for map()                     ////////////

// Array.map((num,i,arr) => {})

// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }
// const nums = [1, 2, 3, 4];
// const mult = nums.myMap((num, i, arr) => {
//     return num * 3;
// })
// console.log(mult);

/////////////                 Polyfill for filter()                     ////////////

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) temp.push(this[i]);
//     }
//     return temp;
// }
// const nums = [1, 2, 3, 4];
// const morethantwo = nums.myFilter((num) => {
//     return num > 2;
// })
// console.log(morethantwo);

/////////////                 Polyfill for reducer()                     ////////////

//arr.reduce((acc,curr,i,arr) => {}, initialValue)

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
// };
// const nums = [1, 2, 3, 4];
// const sum = nums.myReduce((pre, curr, i, arr) => {
//     return pre + curr;
// }, 0)
// console.log(sum);


///////////    difference between map() and forEach()    /////////

//these both are array functions to loop through items of the array

// const arr = [2, 5, 3, 4, 7];

// const mapResult = arr.map((ar) => {
//     return ar + 2;
// })

// // const forEachResult = arr.forEach((ar) => {
// //     return ar + 2;
// // })
// const forEachResult = arr.forEach((ar, i) => {
//     arr[i] = ar + 3;
// })

// console.log(mapResult, forEachResult, arr);


///////       MAP, FILTER AND REDUCE - O/P BASED QUESTIONS      /////

// QUESTION 1

// let students = [
//     { name: "rajesh", rollNumber: 31, marks: 80 },
//     { name: "anuj", rollNumber: 15, marks: 75 },
//     { name: "awanish", rollNumber: 16, marks: 35 },
//     { name: "atul", rollNumber: 7, marks: 50 },
// ];

//return all name in uppercase

// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase());
// }

////////// or    /////////

// const names = students.map((stu) => stu.name.toUpperCase());
// console.log(names);

//                 QUESTION 2                    //////////

//return only details of those who scored more than 60 marks

// const mark = students.filter((stu) => stu.marks > 60)
// console.log(mark);

//                 QUESTION 3                    //////////

//   more than 60 marks and rollnumber greater than 15

// const student = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15)
// console.log(student);

//                 QUESTION 4                   //////////

// sum of marks of all students

// const student = students.reduce((prev, curr) => {
//     return prev + curr.marks;
// }, 0)
// console.log(student);

//                 QUESTION 5                   //////////

// return only names of students who scored more than 60

// const name = students.filter((stu) => stu.marks > 60).map(stu => stu.name)
// console.log(name);

//                 QUESTION 6                   //////////

// return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 6

// const totalMarks = students.map((stu) => {
//     if (stu.marks < 60) {
//         stu.marks += 20;
//     }
//     return stu;
// }).filter((stu) => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0)
// console.log(totalMarks);



////////////////////     functions is javascript     ///////////////////////

/// 🎆 question 1    what is function declaration

// function square(num) {
//     return num * num;
// }
// console.log(square(5));


/// 🎆 question 2   what is function expression

//function expressions are assign to a variable
// const square = function (num) {
//     return num * num;
// }
// console.log(square(5));


/// 🎆 question 3  what are first class functions

//a function can be passed as an argument to other functions,
// can be returned by another function and can be assigned as a value to a variable.

//In JavaScript, functions are first-class objects, which means they can be: stored in a variable, object, 
// or array. passed as an argument to a function. returned from a function.

// function square(num) {
//     return num * num;
// }

// function displaySquare(fn) {
//     console.log("square is " + fn(5));
// }
// displaySquare(square);


/// 🎆 question 4   what is IIFE

// function square(num) {
//     console.log(num * num);
// }
// square(5);

// (function square(num) {
//     console.log(num * num);
// })(5);

/// 🎆 question 5  function scope in javascript

// var num1 = 20,
//     num2 = 3,
// var name = "Rajesh";

// function multply() {
//     return num1 * num2;
// }

// console.log(multply()); // return 60

///// A nested function example

// function getScore() {
//     var num1 = 3,
//         num2 = 3;

//     function add() {
//         return name + "scored" + (num1 + num2);
//     }
//     return add();
// }
// getScore();


// Q no 7 - function scope output based question

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {   //var does not have block scope
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }


// Q no. 8 function in javascript
// function hoisting

// functionName();
// console.log(x);

// function functionName() {
//     console.log("function hoisted");
// }
// var x = 5;

////Q-9  function Hoisting - O/P based question

// var x = 21;
// var fun = function () {
//     console.log(x);
//     var x = 20;
// }
// fun();


// Q- 10  Params vs Arguement

// function square(num) { //Params
//     console.log(num * num);
// }
// square(5);  //// Arguement

// when we call the function and passed the value in it then it is
// called argument and when we receive these values inside of our function then it is
// called param


// function multply(num1, num2) {
//     console.log(num1 * num2);
// }
// var arr = [5, 6];
// multply(...arr);


// const fn = (a, x, y, ...numbers) => {
//     console.log(x, y, numbers);
// }

// fn(5, 6, 3, 7, 8, 5, 3)


//////////////               callback function       //////////////////

// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// function greeting(name) {
//     alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
// }

// processUserInput(greeting);



///////////      Closures in java script           /////////////

// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

///////////// Lexical scope

// var user = "rajesh"
// function local() {
//     console.log(user);
// }
// local();


// global soope
// function sub() {
//     var name = "rajesh";
//     // inner scope 2
//     function dislayName() {
//         // inner scope
//         alert(name)
//     }
//     dislayName();
// }
// sub();


// Q-1  what will be logged to console

// let count = 0;
// (function printcount() {
//     if (count == 0) {
//         let count = 1;  // shadowing
//         console.log(count);   /// 1
//     }
//     // count = 0
//     console.log(count); // 0
// })();

// Question 2 write a function that would allow you to do this

// function createdBase(num) {
//     return function (innerNum) {
//         console.log(innerNum + num);
//     }
// }

// var addSix = createdBase(6);
// addSix(10);   //return 16
// addSix(21);  //return 27


// question 3  = Time Optimizaton

// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }
//     // before optimization
//     console.log(a[index]);

//     // after opimization
//     return function (index) {
//         console.log(a[index]);
//     }
// }

// const closures = find();
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("50");
// closures(50);
// console.timeEnd("50")


// Qestion  seTimeOut Output

// function a() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// a();

//// print the 0 1 2  without changing var    /// we create a closure


// for (var i = 0; i < 10; i++) {
//     function inner(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
//     inner(i);
// }


//       how would you use a clousere to create a private counter

// function counter() {
//     var _counter = 0;

//     function add(increment) {
//         _counter += increment;
//     }

//     function retrive() {
//         return "countr = " + _counter;
//     }

//     return {
//         add,
//         retrive,
//     };
// }

// const c = counter();
// c.add(5);
// c.add(10);

// console.log(c.retrive());


//             once Polyfill   ///////////

// function once(func, context) {
//     let ran;

//     return function () {
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     }
// }
// const hello = once((a, b) => console.log("hello", a, b));

// hello(1, 2);
// hello(1, 2);
// hello(1, 2);
// hello(1, 2);



// /////     Currying in javascript           //////////////

///   example when we convert this type of function f(a,b) into f(a)(b)
//  is called currying

// function f(a,b){
//     console.log(a,b);
// }

// function f(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(f(5)(6));


/////////////// q-1       sum(2)(6)(1)

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(6)(2)(5));

// Question -2
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 2


// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             if (operation === "sum") return a + b;
//             else if (operation === "multiply") return a * b;
//             else if (operation === "divide") return a / b;
//             else if (operation === "subtract") return a - b;
//             else return "invalid"
//         }
//     }
// }
// console.log(evaluate("sum")(2)(6));

// const mul = evaluate("multiply");
// console.log(mul(3)(5));
// console.log(mul(6)(4));


////////////////      Infinite Currying           ////////////

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }
// console.log(add(5)(2)(8)(7)(3)());


/////////////       manipulating DOM    /////////////

// function updateElement(id) {
//     return function (content) {
//         document.querySelector("#" + id).textContent = content;
//     }
// }
// const updateHeader = updateElement("heading");
// updateHeader("hello how are you");



/////////////////////////           output based question  ////////////


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//     function kuchbhi(i) {
//         setTimeout(() => console.log(i), i * 1000);
//     }
//     kuchbhi(i)
// }


// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
// //Method 1: Convert the keys to Array using - Object.keys()
// console.log(Object.keys(obj));
// // ["id", "name", "age", "work"]
// // Method 2 Converts the Values to Array using - Object.values()
// console.log(Object.values(obj));
// // ["1", "user22r", "26", "programmer"]
// // Method 3 Converts both keys and values using - Object.entries()
// console.log(Object.entries(obj));
// //[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]



//////////////////////         Objects in javascript     //////////////

// const user = {
//     name: "rajesh",
//     age: 25,
// }
// delete user.age;
// // user.name = "vishwakarma"
// console.log(user);


// const func = (function (a) {
//     delete a;   ///  delete keyword is only use when we want to delete property from object not a local variable
//     return a;
// })(5);
// console.log(func);


// const user = {
//     name: "rajesh",
//     age: 25,
//     "like this": true,     //////// how to access this property
// }
// delete user["like this"]
// // console.log(user["like this"]);
// console.log(user);


// const user = {
//     name: "rajesh",
//     age: 25,
//     value: true,
// }
// for (key in user) {
//     console.log(user[key]);
// }


////////////////   what is the output       ////////////

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three",
// }
// console.log(obj);


/// create a function multiplyByTwo(obj) that multiplies all numeric p
// property values of nums by 2


// let nums = {
//     a: 100,
//     b: 200,
//     title: "my nums"
// }
// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }
// console.log(nums);


///////////   Q -3  whats the output of the following code  . /////////

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" }

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// // console.log(a);


// question = 4 whats is the json.stringify and json.parse

// const user = {
//     name: "rajesh",
//     age: 25,
// }
// const strObj = JSON.stringify(user) ////////how to convert object in string
// console.log(strObj);

// localStorage.setItem("test", user);
// // localStorage.setItem("test", strObj);

// console.log(JSON.parse(strObj));  


/////////////        whats th output //////

// console.log([..."raj"]);

// const user = { name: "raj", age: 25 };
// const admin = { admin: true, ...user };
// console.log(admin);

// const settings = {
//     username: "raj",
//     level: 19,
//     health: 85,
// }
// const data = JSON.stringify(settings, ["level", "health"])
// console.log(data);


// const shape = {
//     radius: 12,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius, // this.radius is not exist and this is pointed to window object 
// }

// console.log(shape.diameter());
// console.log(shape.perimeter());



/////            what is destructring in objects ////

// let user = {
//     name: "rajesh",
//     age: 25,
// }

// const name = "vishwakara"; ////// want to change name

// // const { name } = user;
// const { name: myname } = user;
// console.log(myname);
// // console.log(name);


// let c = { greeting: "hey!" };
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);
//when we try to assign one obj to another we are not copping all the 
// properties of one obj to other variable
// we just simply provide the reference to this obj to variable


// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });


// let persion = { name: "rajesh" };
// const member = [persion];
// persion = null;
// console.log(member);


// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//     console.log((x.number *= 2));
// }
// multiply();
// multiply();
// multiply(value);
// multiply(value);


// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "john",
//         age: 50,
//     }
//     return person
// }

// const personObj1 = {
//     name: "alex",
//     age: 30,
// }

// const persionObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1);
// console.log(persionObj2);


///////// question 17 - how to deep copy/ clone an object

// let user = {
//     name: "rajesh",
//     age: 25,
// }
// const objClone = Object.assign({}, user);
// console.log(user, objClone);



/////////////    Call, Apply, Bind     //////////////////

// let userDetails = {
//     name: "Rajesh",
//     age: 25,
//     designation: "frontend developer",
//     printDetails: function () {
//         console.log(this.name);
//     }
// }
// userDetails.printDetails();

// let userDetails1 = {
//     name: "vishwakarma",
//     age: 26,
//     designation: "frontend developer",
// }
// // function borrowing
// userDetails.printDetails.call(userDetails1);


// let userDetails = {
//     name: "Rajesh",
//     age: 25,
//     designation: "frontend developer",
// }

// let printDetails = function (state, country) {
//     console.log(this.name + " " + state + " " + country);
// }
// printDetails.call(userDetails, "Delhi", "India");

// let userDetails1 = {
//     name: "vishwakarma",
//     age: 26,
//     designation: "frontend developer",
// }
// // Call
// // function borrowing
// printDetails.call(userDetails1, "Nagpur", "Maharastara"); /// any type of params

// // Apply
// printDetails.apply(userDetails1, ["Nagpur", "Maharastara"]); // only array type of params

// // Bind
// let newFun = printDetails.bind(userDetails, "Delhi", "India");
// newFun();

// // in call we directly call function and in bind first we store our function in a variable so we can use it later




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let a = [];
// let b = [];
// console.warn(a == b)
// console.warn(a === b)


// let a = [];
// let b = a;
// console.warn(a == b);
// console.warn(a === b);


// let a = [20];
// let b = [20];
// console.warn(a[0] == b[0])
// console.warn(a[0] === b[0]);


// let z = [1, 2, 3, 4];
// let a = { name: "anil" };
// console.warn(...z); I


// console.log(typeof NaN);


// let data = 10- -10;
// console.log(data);


// const set = new Set([1, 1, 2, 3, 4, 4, 5]);
// console.log(set);


// let data = { name: "raj" };
// console.log(delete data.name);


// let data = { name: "raj" };
// console.log(delete data);


// const data = ["Peter", "anil", "san"];
// const [y] = data;
// console.log(y);


// const data = ["Peter", "anil", "sam"];
// const [y] = data; // how to get second element
// console.log(y);


// const data = { name: "anil", age: 29, skill: "35" };
// const { name } = data;
// console.log(name);
// // how to get name property without , operator


// let data = { name: "anil", age: 29, skill: "35" };
// let info = { city: "sultanpur", mail: "raj@56gmail.com" };
// data = { ...data, ...info };
// // merge two obj
// console.log(data);


// let data = { name: "anil", age: 29, skill: "35" };
// let info = { city: "sultanpur" };
// data = { data, ...info };
// console.log(data);


// let data = { name: "anil", age: 29, skill: "35" };
// let info = { city: "sultanpur", skill: "html" };
// data = { ...data, ...info };
// console.log(data);


// const name = "raj";
// console.log(name());


// const res = false || {} || null;
// console.log(res);


// const res = null || false || '';
// console.log(res);


// const res = [] || 0 || true;
// console.log(res);


// console.log(Promise.resolve(5));

// console.log('♥' === '♥');


// let name = "rajesh";
// function getName() {
//     console.log(name);
//     let name = 'raj';
// }
// getName();


// let name = "rajesh";
// function getName() {
//     console.log(name);
// }
// getName();


// console.log(`$((x => x)('i Love))(to Program`);


// const name = "code step by step"
// console.log(typeof name === 'object');
// console.log(typeof name === 'string');


// const name = "rajesh";
// const age = 25;
// console.log(isNaN(name));
// console.log(isNaN(age));


// let persion = { name: "rajesh" };
// // what can modfy person object
// Object.seal(persion);
// console.log(persion);


// let data = [2, 6, 5, 8, 7];
// // remove first element
// // data.shift();
// // data.unshift(1);
// console.log(data);


// let data = [2, 6, 5, 8, 7];
// // remove last element
// data.pop();
// console.log(data);


// check any value is odd or even

// let a = 30;
// console.log(a % 2);


// let data = {
//     name: "anil"
// }
// delete data.name;
// console.log(data);


// let data = "true";
// // convert data to boolean false value
// console.log(!data);


// let data = "true";
// // convert data to boolean true value
// console.log(!!data);


// let data = ["anil", "peter", "bruce"];
// delete data[1];
// console.log(data);
// console.log(data.length);


// let c = 3 ** 3;
// console.log(c);


// let a = 2;
// setTimeout(() => {
//     console.log(a);
// }, 0)
// a = 100;


// let a = 3;
// let A = 33;
// console.log(A);


// let A10 = "like";
// let 10A = "ok";
// console.log(A10);


// let a = "like";
// let b = `like`;
// console.log(a === b);


// let a = 3;
// let c = 4;
// console.log(--c === a);


// let a = 3;
// let b = 3
// let c = 4;
// console.log(a === b === --c);


// console.log(b);
// var b;


// console.log(a);


// console.log([[[[]]]]);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    classes      //////

// let persion = {
//     name: 'raj',
//     age: 20,
//     printName: function () {

//     }
// }
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     printName() {

//     }
// }
// let s1 = new Student('raj', 20);
// console.log(s1);



// class Kfc {
//     ofderChicken() {
//         return "🍗"
//     }
// }
// let KfcPune = new Kfc();
// console.log(KfcPune.ofderChicken());


// class KFC {
//     orderChicken() {
//         let blinket = new Blinkit();
//         blinket.deliver("hiii");
//     }
// }

// class Blinkit {
//     deliver(parcel) {
//         setTimeout(() => {
//             console.log("hi " + parcel + " hi");
//         }, 5000)
//     }
// }

// let kfcPune = new KFC();
// kfcPune.orderChicken();


//////////////////////////////////////////////////////////////////////////////

//////// Callback Promise Async Await //////////////////////

// const datas = [
//     { name: "raj", profession: "frontend developer" },
//     { name: "rajesh", profession: "frontend developer" }
// ];

// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data, index) => {
//             output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

///////   callback /////
// function createData(newdata, callback) {
//     setTimeout(() => {
//         datas.push(newdata);
//         callback()
//     }, 2000);
// }
// createData({ name: "rajkumar", profession: "frontend developer" }, getDatas)



/////////////        promises      /////////

// function createData(newdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newdata);
//             let error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject("error")
//             }
//         }, 2000);
//     })

// }
// createData({ name: "rajkumar", profession: "frontend developer" })
//     .then(getDatas)
//     .catch(err => console.log(err))


/////////////       Async Await     ///////

// async function start() {
//     await createData({ name: "rajkumar", profession: "frontend developer" })
//     getDatas();
// }
// start();


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("resolve after 2 second");
//         resolve(56);
//     }, 2000);
// })
// p1.then((value) => {
//     console.log(value);
// })


///////////////    Closures    ////////////

// var sum = function (a) {
//     console.log(a);
//     var c = 4;
//     return function (b) {
//         return a + b + c;
//     }
// }
// var store = sum(200);
// console.log(store(5));


// var sum = function (a, b, c) {
//     return {
//         getSumTwo: function () {
//             return a + b;
//         },
//         getSumThree: function () {
//             return a + b + c;
//         }
//     }
// }
// var store = sum(5, 6, 8);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());


//////////////////     Rest & Spread Operator   ////////////////


// function sum(a, b, c, ...other) {  ///////rest
//     console.log(other);
//     return a + b + c;
// }
// const res = sum(2, 5, 5, 8, 9, 2);
// console.log(res);


/////    spread

// var names = ["Ajay", "Anuj", "Vivek"];
// function getName(name1, name2, name3) {
//     console.log(name1, name2, name3);
// }
// getName(...names);


// var students = {
//     name: "Rajesh",
//     age: 25,
//     skills: ["html", "css"],
// }
// const { ...rest } = students;
// console.log(rest);

// //// spread

// var newStudent = {
//     ...students,
//     age: 26,
// }
// console.log(newStudent);



/////////////  Debouncing in javascript         /////////


// let counter = 0;
// function getData() {
//     console.log("fetching data " + counter++);
// }
// function myDebounce(call, d) {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         setTimeout(() => {
//             call();
//         }, d);
//     }
// }

// const betterFunction = myDebounce(getData, 1000)



///////////// Throttling in javascript   /////////////////

// const mythrottle = (fn, d) => {
//     return function (...args) {
//         document.getElementById("myid").disabled = true;
//         setTimeout(() => {
//             fn();
//         }, d);
//     }
// }
// const newFun = mythrottle(() => {
//     document.getElementById("myid").disabled = false;
//     console.log("user clicked");
// }, 2000)












// ///////////////////////////////////////////////////////////////////////////



// Reverse a given string by words. Without using inbuilt functions like split, reverse, join.

// let str = "?Hello how are you";

// // Output should be ?you are how hello?;

// for(let i=str.length-1; i>0; i--){

// }


// let arr = [1, 2, 3, 4, 5, 789, 656, 454, 345, 356789, 43232, 34, 545, 656, 345, 789, 56434, 656, 789, 5434];

// function thirdLargestElement(arr) {
//     let first = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             first = arr[i];
//         }
//     }
//     let second = Number.MIN_VALUE;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > second && arr[i] < first) {
//             second = arr[i];
//         }
//     }
//     let third = Number.MIN_VALUE;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > third && arr[i] < second) {
//             third = arr[i];
//         }
//     }
// }
// console.log(thirdLargestElement(arr));



///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


/////////// Rest Operator & spread Operator /////////////////////

////// Rest Operator

// function add(a, b, c, d, ...rest) {
//     console.log(rest);
//     return a + b + c + d;
// }
// const ans = add(2, 3, 5, 4, 1, 2, 3, 4, 5);
// console.log(ans);

////////// Spread Operator

// var names = ["rajesh", "anuj", "atul"];
// function getName(n1, n2, n3) {
//     console.log(n1, n2, n3);
// }
// getName(names[0], names[1], names[2])
// getName(...names);


////////// Async, Await Promises, Callbacks   ////////////////////

//////Async, Await

// async function data() {
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("21 deg");
//         }, 2000);
//     })
//     let japanWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("25 deg");
//         }, 4000);
//     })
//     // delhiWeather.then(alert)
//     // japanWeather.then(alert)

//     let delhi = await delhiWeather;
//     let japan = await japanWeather;
//     return [delhi, japan];
// }
// console.log("welcome");
// let a = data();
// a.then((val) => {
//     console.log(val);
// })


///////  Promises


// let promise = new Promise((resolve, reject) => {
//     alert("hello")
//     resolve(56)
// })

// console.log("hello one");
// setTimeout(() => {
//     console.log("hello two in 2 seconds");
// }, 2000);

// console.log("my name is" + " hello three");
// console.log(promise);



// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is prnding");
//     setTimeout(() => {
//         // console.log("i am a promise and i am resolved");
//         resolve(true)
//     }, 5000);
// })
// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is prnding");
//     setTimeout(() => {
//         // console.log("i am a promise and i am rejexted");
//         reject(new Error("i am an error"))
//     }, 5000);
// })

// //to get the value
// p1.then((value) => {
//     console.log(value);
// })

// // to catch the error
// // p2.catch((error) => {
// //     console.log("some error occered in p2");
// // })

// p2.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log(error);
// })



//////////// Callback    ////////////

//A callback function is a function passed into anoter function as an argument which 
// i then invoked inside the outer function to complete an action

// Synchronous Programming

// let a = prompt("What is your name");
// let b = prompt("what is your age");
// let c = prompt("what is your favorite color");
// console.log("my name is " + a + " and my age is " + b + " and my favorite color is " + c);

// Asynchronous Programming

// console.log("start");
// setTimeout(() => {
//     console.log("I am settime out");
// }, 3000);
// console.log("end");


const person1 = (friend, callfrnd) => {
    console.log(`i am busy right now i am talking to ${friend}. i will call you back`);
    callfrnd();
}

const person2 = () => {
    console.log(`hey whats up`);
}

person1("Rajesh", person2);