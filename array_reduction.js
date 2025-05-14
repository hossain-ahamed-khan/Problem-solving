// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.


// Array of numbers
const numbers = [3, 6, 2, 9, 4, 7, 10];

// Function to calculate the sum of all even numbers
function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}

// Call the function and print the result
const result = sumEvenNumbers(numbers);
console.log(result);
