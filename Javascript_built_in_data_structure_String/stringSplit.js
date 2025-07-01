let myStr = "hello world, from SESV!";
console.log (myStr.split(',')); // [ 'hello world', ' from SESV!' ]
console.log (myStr.split(' ')); // [ 'hello', 'world,', 'from', 'SESV!']
console.log (myStr); //hello world, from SESV!

//substring 
console.log (myStr.substring(-1,-5)); // trả về chuỗi rỗng
console.log (myStr.substring(-1,5)) ; // hello 
console.log (myStr.substring(5,1)) ; // ello
//Slice
console.log (myStr.slice(-1,5)); // trả về chuỗi rỗng
console.log (myStr.slice(-23,5)); // hello

