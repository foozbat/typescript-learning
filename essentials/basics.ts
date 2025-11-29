
let userName: string;
let userAge = 38;

userName = "blah";

function add(a: number, b = 5) {
    return a + b;
}

let rslt = add(10);

console.log(rslt);