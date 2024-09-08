// 1. Function Declarations
function greet() {
    console.log("Hello!");
}

// 2. Function Expressions
const greet = function() {
    console.log("Hello!");
};

// 3. Arrow Functions
const greet = () => {
    console.log("Hello!");
};

// 4. Anonymous Functions
setTimeout(function() {
    console.log("Executed after 1 second");
}, 1000);

// 5. Named Functions
const namedFunction = function myFunction() {
    console.log("This function has a name");
};

// 6. Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log("Executed immediately!");
})();

// 7. Constructor Functions
function Person(name) {
    this.name = name;
}
const person = new Person('Alice');

// 8. Higher-Order Functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// 9. Callback Functions
function fetchData(callback) {
    setTimeout(() => {
    callback("Data fetched!");
}, 1000);
}

fetchData(data => console.log(data));

// 10. Partial Functions
function multiply(a, b) {
    return a * b;
}

function partialMultiply(a) {
return function(b) {
    return multiply(a, b);
};
}

const double = partialMultiply(2);
console.log(double(5)); // 10

// 11. Currying
function add(a) {
    return function(b) {
    return a + b;
};
}

const add5 = add(5);
console.log(add5(10)); // 15


// 12. Default Parameter Functions
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// 13. Rest Parameter Functions
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// 14. Generator Functions
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();
console.log(gen.next().value); // 1

// 15. Async Functions
async function fetchData() {
    let response = await fetch('https://api.example.com');
    let data = await response.json();
    return data;
}




















