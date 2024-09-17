// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"


//   2. Find the Maximum Element in an Array
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5


// 3. Check if a Number is Prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  console.log(isPrime(7)); // Output: true


//   4. Calculate Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120


// 5. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8


// 6. Find the Sum of Digits of a Number
function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfDigits(123)); // Output: 6


// 7. Check for Palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); // Output: true


// 8. Find the GCD of Two Numbers
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
console.log(gcd(12, 18)); // Output: 6


// 9. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30)); // Output: 86


// 10. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(fahrenheitToCelsius(86)); // Output: 30





