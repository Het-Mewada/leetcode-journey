/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let numStr = digits.join('');
    let newNum = BigInt(numStr) + 1n;
    
    return newNum.toString().split('').map(Number);
};