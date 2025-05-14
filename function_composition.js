// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


// Function to square a number
function square(x) {
    return x * x;
}

// Function to double a number
function double(x) {
    return x * 2;
}

// Function to add 5 to a number
function addFive(x) {
    return x + 5;
}

// Composing the functions
// The order of function calls is important
function composedFunction(x) {
    return addFive(double(square(x)));
}


const result = composedFunction(3);
console.log(result);