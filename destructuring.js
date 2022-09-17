/**
 * The destructuring operator enables an assign inline of many variables
 */

function foo() {
    return [1, 2, 3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var [a, b, c] = foo();
var { x: x, y: y, z: z } = bar();
console.log(a, b, c); // 1 2 3
console.log(x, y, z); // 4 5 6
/**
 * When dealing with objects the destructuring operator can be used in a shorter
 * version. However the name of the variables and the properties names has
 * to be the same 
 */
var { x, y, z } = bar();
/*
 * CAUTION, when using this assing with objects the-left-hand side is the source and
 * the right-hand-side is the target  
 */
var aa = 10,
    bb = 20;
var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;
console.log(AA, BB); // 10 20

/**
 * You can even use computed property expressions in the destructuring. 
 */

var which = "x",
    o = {};
({
    [which]: o[which]
} = bar());
console.log(o.x); // 4

//## Not Just Declarations Missing

/**
 *  solve the traditional “swap two variables” task without a temporary  * variable
 */
var x = 10,
    y = 20;
[y, x] = [x, y];
console.log(x, y); // 20 10

/**
 * In the below snippet, the p variable is assigned with an array reference. The same occurs for an object 
 */
var o = [1, 2, 3],
    a, b, c, p;
p = [a, b, c] = o;
console.log(a, b, c); // 1 2 3
p === o; // true
// to many to feel 

/**
 * Combine destructuring assign and spread operator
 */
var [a = 3, b = 6, c = 9, d = 12] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();
console.log(a, b, c, d); // 1 2 3 12
console.log(x, y, z, w); // 4 5 6 20
/**
 * However we have to care about this syntax, this can be hard to read
 */
var x = 200,
    y = 300,
    z = 100;
var o1 = { x: { y: 42 }, z: { y: z } };
({ y: x = { y: y } } = o1);
({ z: y = { y: z } } = o1);
({ x: z = { y: x } } = o1);
console.log(x.y, y.y, z.y); // 300 100 42

/**
 * 
 */
var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };
var [a, [b, c, d], e] = a1;
var { x: { y: { z: w } } } = o1;
console.log(a, b, c, d, e); // 1 2 3 4 5
console.log(w); // 6

/**
 * Nested destructuring can be a simple way to flatten out object namespaces.
 * For example:
 */
var App = {
    model: {
        User: function() { return "user" }
    }
};
// instead of:
// var User = App.model.User;
var { model: { User } } = App;