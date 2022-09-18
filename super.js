var o1 = {
    foo() {
        console.log("o1:foo");
    }
};
var o2 = {
    foo() {
        super.foo();
        console.log("o2:foo");
    }
};
Object.setPrototypeOf(o2, o1);
o2.foo();
// o1:foo
// o2:foo
/**
 * super is typically thought of as being only related to classes. However, due to JS’s
 * classless-objects-with-prototypes nature, super is equally effective, and nearly the same in behavior
 * with plain objects’ concise methods.
 */