function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
}
var desc = "awesome";
foo `Everything is ${desc}!`;
// [ "Everything is ", "!"]
// [ "awesome" ]

function x(f, g) {
    g += 5
    console.log(f, "dps", g)
}
x `alguma coisa foi passada${3}33${5}44`
    //Array(3) [ "alguma coisa foi passada", "33", "44" ]  dps 8

/**
 * A tagged string literal is like a processing step after the
 *  interpolations are evaluated but before the final string value is compiled,
 *  allowing you more control over generating the string from the literal.
 */

function tag(strings, ...values) {
    return strings.reduce(function(s, v, idx) {
        return s + (idx > 0 ? values[idx - 1] : "") + v;
    }, "");
}
var desc = "awesome";
var text = tag `Everything is ${desc}!`;
console.log(text); // Everything is awesome!



function dollabillsyall(strings, ...values) {
    return strings.reduce(function(s, v, idx) {
        if (idx > 0) {
            if (typeof values[idx - 1] == "number") {
                // look, also using interpolated
                // string literals!
                s += `$${values[idx - 1].toFixed(2)}`;
            } else {
                s += values[idx - 1];
            }
        }
        return s + v;
    }, "");
}
var amt1 = 11.99,
    amt2 = amt1 * 1.08,
    name = "Kyle";
var text = dollabillsyall `Thanks for your purchase, ${name}! Your
product cost was ${amt1}, which with tax
comes out to ${amt2}.`
console.log(text);
// Thanks for your purchase, Kyle! Your
// product cost was $11.99, which with tax
// comes out to $12.95.