// string templating
let name1 = 'John' // put text between single quote
let name2 = "Linda" // double quotes ok


const greet = (name) => console.log (`Hello, ${name}`);
console.log('Hello, ' + name1); // ES6
console.log (`Hello, ${name1}`); //template literal
greet(name1); // Hello, John
greet(name2); // Hello, Linda
