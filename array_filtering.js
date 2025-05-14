// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


// Array of people objects
const people = [
    { name: "Lima", age: 25, gender: "female" },
    { name: "Robin", age: 30, gender: "male" },
    { name: "Sana", age: 28, gender: "female" },
    { name: "Piash", age: 22, gender: "male" },
    { name: "Ria", age: 35, gender: "female" }
];

// Function to filter out females and return names of remaining people
function getMaleNames(peopleArray) {
    return peopleArray
        .filter(person => person.gender !== "female")
        .map(person => person.name);
}

// Call the function and print the result
const result = getMaleNames(people);
console.log(result); 
