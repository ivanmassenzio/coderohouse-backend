function oldPow(base, exponent) {
    return Math.pow(base, exponent)
}
function newPow(base, exponent) {
    return base ** exponent
}


console.log(oldPow(2,3))
console.log(newPow(2,3))