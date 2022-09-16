/**
 * Spread operator '...' its basic function is to act like a spreader of arguments to functions
 */

function foo(x, y, z) {
    console.log(x, y, z);
}
foo(...[1, 2, 3]); // 1 2 3
/**
 *  In the code snippet below all the remaining arguments passed to the function are gathered in the 'z' variable
 */

function foo(x, y, ...z) {
    console.log(x, y, z);
}
foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]

/**
 *  As there is no variable besides args all the arguments passed to the function are joined in the args variable 
 */
function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1,2,3,4,5]