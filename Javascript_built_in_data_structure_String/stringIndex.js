let myStr = 'hello';
console.log (myStr[0]); // h
console.log (myStr.charAt[0]); // undefined
console.log (myStr.charAt(0)); // h

const indexNum = 0;
//character at index 0 is: 'h', UTF16 code number is 104
console.log (`character at index ${indexNum} is: '${myStr.charAt(0)}', UTF16 code number is ${myStr.charCodeAt(0)}`);

