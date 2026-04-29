// Activity 01: Declare array, function, and object
let arr = [1, 2, 3, 4, 5];
function greet(name) {
    return "Hello, " + name + "!";
}
let person = {
    name: "Dhiraj",
    age: 21
};


// Activity 02: Reverse a number
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Activity 03: Check Palindrome (number)
function isPalindromeNumber(num) {
    return num === reverseNumber(num);
}

// Activity 04: Fibonacci series
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Activity 05: Largest element in array
function largestInArray(arr) {
    return Math.max(...arr);
}

// Activity 06: Remove duplicate element in array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Activity 07: Missing number in array (1 to n)
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

// Activity 08: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Activity 09: Check Palindrome in string
function isPalindromeString(str) {
    let rev = reverseString(str);
    return str === rev;
}

// Activity 10: Check Prime Number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Activity 11: Check Factorial
function factorial(n) {
    if (n < 0) return undefined;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Activity 12: Function to find even or odd
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Activity 13: Function to find sum of array
function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// Example usage:

console.log("\n===== Activity 01: Greet Function =====");
console.log(greet("Siddhant"));

console.log("\n===== Activity 02: Reverse Number =====");
console.log(reverseNumber(12345));

console.log("\n===== Activity 03: Palindrome Number =====");
console.log(isPalindromeNumber(121));

console.log("\n===== Activity 04: Fibonacci Series =====");
console.log(fibonacci(7));

console.log("\n===== Activity 05: Largest in Array =====");
console.log(largestInArray([1, 5, 3, 9, 2]));

console.log("\n===== Activity 06: Remove Duplicates =====");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log("\n===== Activity 07: Missing Number =====");
console.log(findMissingNumber([1, 2, 4, 5], 5));

console.log("\n===== Activity 08: Reverse String =====");
console.log(reverseString("hello"));

console.log("\n===== Activity 09: Palindrome String =====");
console.log(isPalindromeString("madam"));

console.log("\n===== Activity 10: Prime Number =====");
console.log(isPrime(17));

console.log("\n===== Activity 11: Factorial =====");
console.log(factorial(5));

console.log("\n===== Activity 12: Even or Odd =====");
console.log(evenOrOdd(10));

console.log("\n===== Activity 13: Sum of Array =====");
console.log(sumOfArray([1, 2, 3, 4, 5]));
