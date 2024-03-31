// Arithmetic operators
// Perform basic mathematical operations on numbers
var num1 = 20;
var num2 = 20;
console.log(num1 + num2); // Add num1 and num2
console.log(num1 - num2); // Subtract num2 from num1
console.log(num1 / num2); // Divide num1 by num2
console.log(num1 % num2); // Get the remainder of num1 divided by num2

// Assignment operators
// Assign values to variables or modify them with arithmetic operators
var num3 = 10; // Assign 10 to num3
num3 += 5; // Add 5 to num3 and assign the result to num3
console.log(num3); // 15
num3 -= 2; // Subtract 2 from num3 and assign the result to num3
console.log(num3); // 13

// Relational operators
// Compare values and return a boolean value (true or false)
console.log(num1 > num2); // Check if num1 is greater than num2
console.log(num1 < num2); // Check if num1 is less than num2
console.log(num1 === num2); // Check if num1 is equal to num2 in both value and type
console.log(num1 !== num2); // Check if num1 is not equal to num2 in either value or type

// Logical operators
// Combine or negate boolean values
var isEven = num1 % 2 === 0; // Check if num1 is even
var isPositive = num1 > 0; // Check if num1 is positive
console.log(isEven && isPositive); // Check if num1 is both even and positive
console.log(isEven || isPositive); // Check if num1 is either even or positive
console.log(!isEven); // Negate the value of isEven
