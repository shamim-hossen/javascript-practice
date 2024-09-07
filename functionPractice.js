/*
    1#Function Declaration: function funcName() {}
    2#Function Expression: const funcName = function() {}
    3#Arrow Function: const funcName = () => {}
    4#IIFE: (function() {})();
    5#Higher-Order Function: function func(callback) { callback(); }
    6#Anonymous Function: function() {}
    7#Constructor Function: function FuncName() { this.name = 'value'; }
    8#Generator Function: function* func() { yield value; }
    9#Async Function: async function func() { await promise; }
    10#Recursive Function: function func() { func(); }
*/

//1# Function Declaration
// This is the traditional way of defining a function
function greet(name){
    return `Hello, ${name}`
}
console.log(greet("Function"));// Hello, Function


//2# Function Expression
// A function can also be assigned to a variable. This is known as a function expression
const greet = function(name) {
    return `Hello, ${name}`;
};
console.log(greet("Expression"));// Hello, Expression


//3# Arrow Function
// Arrow functions provide a shorter syntax for writing functions. They are anonymous by default
const greet = (name) => `Hello, ${name}`;
console.log(greet("Arrow"));// Hello, Arrow


//4# Immediately Invoked Function Expression (IIFE)
// This is a function that is executed immediately after being defined.
(function() {
    console.log("This function runs immediately!");// This function runs immediately
})();


//5# Higher-Order Function 
// A higher-order function takes another function as an argument or returns a function.
/*  Output:
    Before executing callback
    Executing the callback function
    After executing callback
*/
function higherOrderFunction(callback) {
    console.log("Before executing callback");
    callback();
    console.log("After executing callback");
}
higherOrderFunction(function() {
    console.log("Executing the callback function");
});


//6# Anonymous Function
// A function without a name is known as an anonymous function. It's usually used as a callback
setTimeout(function() {
    console.log("function executed");// function executed (after 1 second)
}, 1000);


//7# Constructor Function
// Functions can also be used to create objects, which is called a constructor function. These functions are named with an uppercase first letter.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Mim", 30);
console.log(person1.name);// Mim


//8# Generator Function
// A generator function returns an iterator and can yield multiple values using the yield keyword
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generateNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3


//9# Async Function
// async functions allow the use of await, which makes working with promises easier.
async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    return json;
}
fetchData().then((data) => console.log(data));


//10# Recursive Function
// A recursive function is a function that calls itself.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));//120


//11# Callback Function
// A callback function is passed as an argument to another function and is executed after the completion of that function
/** Output:
 *  Data fetched
    Processing the fetched data
 */
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();  // Callback executed after data fetching
    }, 1000);
}

function processData() {
    console.log("Processing the fetched data");
}
fetchData(processData);


//12# Currying Function
// Currying is a technique where a function is transformed so that it takes arguments one at a time instead of all at once
function curry(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(curry(1)(2)(3)); // 6


// 13# Rest Parameters in Functions
// A function that can accept a variable number of arguments using rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


// 14# Function with Default Parameters
// You can define default values for function parameters, so the function will still work even if arguments are not passed
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());          // "Hello, Guest!"
console.log(greet("Alice"));   // "Hello, Alice!"


// 15# Named Function Expression
// This is like a regular function expression, but the function itself is given a name. It can be useful for recursion or debugging
const factorial = function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);  // Named reference for recursion
};
console.log(factorial(5)); // 120







