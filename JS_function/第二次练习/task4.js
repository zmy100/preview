/**
 * 计算num1+...+num2的值
 * @param {number} num1
 * @param {number} num2
 * @returns {number}返回值，返回num1+...+num2的值
 */
function sum(num1, num2) {
  var sum = 0;
  for (var i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(1, 10));
