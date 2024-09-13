// problem 1
function calculateTax(income, expenses){
    if (typeof income !== "number" || typeof expenses !== "number" || income < 0 || expenses < 0 || income <expenses){
        return "Invalid Input";
    }
    const calculatedTax =(income - expenses)* 0.20;
    return calculatedTax;
}

console.log(calculateTax(10000, 3000)); // 1400
console.log(calculateTax(34000, 1753)); // 6449.400000000001
console.log(calculateTax(5000, 1500)); // 700
console.log(calculateTax(7000, 7000)); // 0
console.log(calculateTax(-5000, 2000)); // Invalid Input
console.log(calculateTax(6000, -1500)); // Invalid Input

