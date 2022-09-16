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