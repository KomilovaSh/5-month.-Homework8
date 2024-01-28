// 1-topshiriq. Destructuring

// 1-misol
// const prices=[10.99, 5.45, 23.00, 7.86];
// let [a, b, c, d]=prices;
// console.log(a);
// console.log(d);

// 2-misol
// const prices=[10.99, 5.45, 23.00, 7.86];
// let [a, b, c, d]=prices;
// [a, b]=[b, a]
// console.log(a);

// 3-misol
// const prices = [10.99, 5.45, 23.00, 7.86];
// const separate = prices.slice(1, 3);
// const multiplied = separate.map(price => price * 2);
// console.log(multiplied); 

// 1-misol
// const movie1={
//     title: "The Matrix",
//     director: "The Wachowskis",
//     year: 1999,
// };

// const movie2={
//     genre: "Science fiction",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
// };

// const movie = Object.assign({}, movie1, movie2);
// console.log(movie);


// 2-misol
// const movie1 = {
//     title: "The Matrix",
//     director: "The Wachowskis",
//     year: 1999,
// };

// const movie2 = {
//     genre: "Science fiction",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
// };

// const movie = Object.assign({}, movie1, movie2);
// const title = movie.title;
// const director = movie.director;
// const genre = movie.genre;
// console.log("Sarlavha: " + title);
// console.log("Rejissyor: " + director);
// console.log("Janr: " + genre);


// 3-misol
// const movie1 = {
//     title: "The Matrix",
//     director: "The Wachowskis",
//     year: 1999,
// };

// const movie2 = {
//     genre: "Science fiction",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
// };
// function merge(a, b) {
//     const { title: title1, director: director1, year: year1 } = a;
//     const { genre: genre2, cast: cast2 } = b;
//     return {
//         title: title1,
//         director: director1,
//         year: year1,
//         genre: genre2,
//         cast: cast2,
//     };
// }
// const movie = merge(movie1, movie2);
// console.log(movie);

// 2-topshiriq. Rest va spread.

// 1-misol
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

const ingredients = ["Flour", "Sugar", "Eggs", "Butter"];

// New ingredient to prepend
const newIngredient = "Milk";

// Create a new array by spreading the ingredients array and prepending the new ingredient
const newArray = [newIngredient, ...ingredients];

console.log(newArray);
