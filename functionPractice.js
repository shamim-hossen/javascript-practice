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