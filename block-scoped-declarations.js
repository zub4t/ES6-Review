/**
 * 'let' declarations are closure by {...}
 */
var a = 2; {
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 2


let a = 2;
if (a > 1) {
    let b = a * 3;
    console.log(b); // 6
    // The 'i' variable is created and destroyed in every loop interaction
    for (let i = a; i <= b; i++) {
        let j = i + 10
        console.log(j);
    }
    // 12 13 14 15 16
    let c = a + b;
    console.log(c); // 8
}

/**
 *  using the keyword 'var or const' for instantiating a variable gives access everywhere 
 * in the closure block, but using the 'let' keyword the 
 * variable is only available after its initialization
 */
{
    console.log(a); // undefined
    console.log(b); // ReferenceError!
    var a;
}
/**
 * Even when the variable is used by the function typeOf
 */
{
    if (typeof a === "undefined") {
        console.log("cool");
    }
    if (typeof b === "undefined") { // ReferenceError!
        // ..
    }
    // ..
    let b;
}

/**
 * As Already mentioned the 'let' keyword will create a new variable in every loop 
 * interaction in contrast to the 'var' keyword. Using  the 'var' keyword the variable is never
 * destroyed
 * 
 */
var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs[3](); //5


/**
 * The keyword 'const' turn a variable into read-only. However, this could be dangerous because 
 * the variable is never recycled by the garbage collector since the variable is always referenced.
 *  Moreover, if the 'const' keyword is used in a complex object like an array or an object the 
 * variable referencing them are immutable but its contents can be mutable
 */
{
    const a = 2;
    console.log(a); // 2
    a = 3; // TypeError!
}
//-------------------------------
{
    const a = [1, 2, 3];
    a.push(4);
    console.log(a); // [1,2,3,4]
    a = 42; // TypeError!
}