/**
 * The default operator can assign a value to an argument when there is a missing value
 * in the function call. This value can be anything a primitive type or a complex 
 * type  or even a function 
 */
function foo(x = 11, y = 31) {
    console.log(x + y);
}

foo(); // 42
foo(5, 6); // 11
foo(0, 42); // 42
foo(5); // 36
foo(5, undefined); // 36 <-- `undefined` is missing
foo(5, null); // 5 <-- null coerces to `0`
foo(undefined, 6); // 17 <-- `undefined` is missing
foo(null, 6); // 6 <-- null coerces to `0`
//----------------------------------------------
//Example of assing a function to a missing argument

function bar(val) {
    console.log("bar called!");
    return y + val;
}

function foo(x = y + 3, z = bar(x)) {
    console.log(x, z);
}
var y = 5;
foo(); // "bar called"
// 8 13
foo(10); // "bar called"
// 10 15
y = 6;
foo(undefined, 10); // 9 10


//-----------------

function foo(x =
    (function(v) { return v + 11; })(31)
) {
    console.log(x);
}
foo(); // 42

/**
 *  An important fact that relates to the @block-scoped-declarations.js@ is that the
 * (...) of a function works like a closure block and the arguments like variables 
 * declared using the keyword 'let'
 */

var w = 1,
    z = 2;

function foo(x = w + 1, y = x + 1, z = z + 1) {
    console.log(x, y, z);
}
foo(); // ReferenceError