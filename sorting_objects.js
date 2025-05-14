// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


// Array of car objects
const cars = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Focus", year: 2021 },
    { make: "Chevrolet", model: "Malibu", year: 2019 }
];

// Function to sort cars by year (ascending)
function sortCarsByYear(carArray) {
    return carArray.sort((a, b) => a.year - b.year);
}

// Call the function and print the sorted array
const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);