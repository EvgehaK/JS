function reverse(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2**31 - 1) return 0;
    return sign * reversed;
}
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
