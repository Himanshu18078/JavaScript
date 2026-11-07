// async function greet(){
//   return "Hello";
// }
// const response = greet();

// response.then((data) => {console.log(data)});

/*
fetch("https://api.github.com/users")
.then((response) => {response.json()})
.then((data) => {console.log(data)});
In an arrow function, {} = you must return. No {} = implicit return.
*/


// fetch("https://api.github.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data));

async function github(){
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
}
github();
console.log("Hi");