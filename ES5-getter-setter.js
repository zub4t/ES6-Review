var o = {
    __id: 10,
    get id() { return this.__id++; },
    set id(v) { this.__id = v; }
}
o.id; // 10
o.id; // 11
o.id = 20;
o.id; // 20
// and:
o.__id; // 21
o.__id; // 21 -- still!