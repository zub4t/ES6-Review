var prefix = "user_";
var o = {
    baz: function() {},
    [prefix + "foo"]: function() {},
    [prefix + "bar"]: function() {}

};
//Any valid expression can appear inside the [ .. ]