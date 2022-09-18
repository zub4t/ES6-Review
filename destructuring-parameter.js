function foo([x, y]) {
    console.log(x, y);
}
foo([1, 2]); // 1 2
foo([1]); // 1 undefined
foo([]); // undefined undefined



function foo({ x, y }) {
    console.log(x, y);
}
foo({ y: 1, x: 2 }); // 2 1
foo({ y: 42 }); // undefined 42
foo({}); // undefined undefined


function f1([x = 2, y = 3, z]) {}

function f2([x, y, ...z], w) {}

function f3([x, y, ...z], ...w) {}

function f4({ x: X, y }) {}

function f5({ x: X = 10, y = 20 }) {}

function f6({ x = 10 } = {}, { y } = { y: 10 }) {}

function f3([x, y, ...z], ...w) {
    console.log(x, y, z, w);
}
f3([]); // undefined undefined [] []
f3([1, 2, 3, 4], 5, 6); // 1 2 [3,4] [5,6]



function f6({ x = 10 } = {}, { y } = { y: 10 }) {
    console.log(x, y);
}
f6(); // 10 10
f6(undefined, undefined); // 10 10
f6({}, undefined); // 10 10
f6({}, {}); // 10 undefined
f6(undefined, {}); // 10 undefined
f6({ x: 2 }, { y: 3 }); // 2 3