// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


// Array of book objects
const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 }
];

// Function to extract book titles
function getBookTitles(bookArray) {
    return bookArray.map(book => book.title);
}

// Call the function and print result
const titles = getBookTitles(books);
console.log(titles); 