// const student = ["Nicole", "Kidman", 15, [12, 11, 8], "15.10.2002"];
// let [firstName, lastName, age, ...arr] = student;
// // let firstName = student[0];
// // let lastName = student[1];
// // let age = student[2];
// console.log(firstName); // Nicole
// console.log(lastName); // Kidman
// console.log(age); // Kidman
// console.log(arr[1]);

let inc = (x) => x + 1;

let sum = (a, b) => a + b;

let hello = () => {
  console.log("hello");
};
console.log(sum(4, 5));

hello();

let arr = [2, 30, 10];
let sorted = arr.sort((a,b) => a - b );
console.log(sorted);
