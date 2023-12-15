function logParameters(param1, param2, ...rest) {
    console.log(...rest);
}

logParameters(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let o = { p1: "v1", p2: "v2", p3: "v3", p4: "v4" };
let { p1, ...rest } = o;
console.log(rest);
