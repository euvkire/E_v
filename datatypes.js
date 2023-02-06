console.log(4);
//This is a comment

//Numbers
//Integers
console.log(-3);
console.log(0);
console.log(3);
//Floating point number
console.log(3.14);
console.log(100.045);

//Strings
//Characters, letters, symbols, spaces
console.log("hello world");
console.log('Hello World!!');
console.log(`hello world 123`)

//Arithmetic Operators (Math)
console.log(14+2);
console.log(14-2);
console.log(14*2);
console.log(14/2);
console.log(14%2);
console.log(15%10);

//Concatenation: combine strings
console.log("My name"+" is Erik Vue.");
console.log('My' + ' age ' + ' ' + '   is ' + '   ' + 15 + ' . ');
console.log("Your age is \n17."); //\n means new line

//Template literal - plug in a calculated value
//use backticks `` next to the 1
console.log(`15 divided by 10 = ${15/10} axcvzxcvx`);
console.log(`my` + `name`);
console.log("Not" + "  "+"today"+".");
console.log("Your age \n is 14");
console.log("Your age /n is 14");

//Unary Operators use only one value
console.log(typeof 15);
console.log(typeof "this string");
console.log(typeof true);
console.log(typeof false);

//Binary Operators use two values
//Comparison Operators
console.log(10 > 5);  //greater than
console.log(10 < 5); //less than
console.log(10 >= 5); //greater than or equal to
console.log(10 <= 5); //less than or equal to
console.log(10 == 5); //are they both equal? false
console.log(10 == 10); //are they both equal? true
console.log(10 != 5); //are they different? true
console.log(10 != 10); //are they different? false
//Logical Operators
// AND && shift-7 true when both are true
console.log(3>2 && 1>5); //true and false = false
console.log(3>2 && 1<5); //true and true = true
console.log(3<2 && 1<5); //false and true = false
console.log(3<2 && 1>5); //false and false = false
//Ternary Operators use three values
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log(3>2 ? "yes it is true" : "no, it is not true");
console.log(3<2 ? "yes it is true" : "no, it is not true");

// Order of Operations
// Everything Else (happens first)
// Comparison Operators
// AND
// OR (happens last)
console.log( 1 + 1 == 3 && 10 * 12 > 100);
// 2 == 3 && 120 > 100
// false and true
// false

console.log( (1 + 1 == 3) && (10 * 12 > 100));
console.log( ((1 + 1) == 3) && ((10 * 12) > 100));

console.log(typeof 15);
console.log(typeof `this`);
console.log(typeof "that");
console.log(typeof true);
console.log(typeof false);
console.log(typeof "TRUE");

//random
console.log( 7 == 7 );
console.log( 7 != 7 );
console.log( 7 == 10 );
console.log( 7 != 10 );
console.log( 15 > 10 );
console.log( 21 > 30);
console.log( 15 > 15);
console.log( 15 >= 15);
console.log( 15 <= 15);
console.log( 15 < 15 );
console.log( 15 < 20);
console.log( 21 <= 50);
console.log( 23 <= 10);
//random
console.log( 1 > 0 && 10 <= 100);
console.log( 1 > 0 && 10 >= 100);
console.log( 1 < 0 && 10 == 100);
console.log( 1 > 0 || 10 <= 100);
console.log( 1 > 0  || 10 >= 100);
console.log( 1 < 0 || 10 == 100);
//random
console.log( 1 < 5 ? "a" : "b" );
console.log( 1 > 5 ? "yes" : "no" );
console.log( 1 > 5 ? 1 : 20 );
console.log(21 != 20 ? "you win!" : "you lose!");
console.log(1+1 == 2 && 10 * 10 > 50);
//Practice quiz
console.log(17%2);
console.log(`17 + 2 ${17+2}`);
console.log(25>100 && 25>10);
console.log(25>=20);
console.log(25>100 || 25>10);
console.log(3*2>1 || 25+71 !=17%5);
//quiz
console.log(17%3);
console.log(17%13);
// Variables store data for later use

