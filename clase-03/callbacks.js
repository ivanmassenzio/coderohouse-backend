const sum = (a , b) => a + b;
const res = (a , b) => a - b;
const mul = (a , b) => a * b;
const div = (a , b) => a / b;

const calc = (a, b, callback) => {
    console.log('====================================');
    console.log(`${a} ${callback.name} ${b}`);
    console.log('====================================');
    return callback(a,b);
}

console.log('calc', calc(2, 3, sum));
console.log('calc', calc(2, 3, res));
console.log('calc', calc(2, 3, mul));
console.log('calc', calc(2, 3, div));