/**
 * 判断传入的数字是否是质数
 * @param {number} num 一个数字，判断这个数字是否是质数
 * @returns {boolean} 返回结果，如果是质数，返回true.如果不是质数，返回false
 */
function isPrimeNum(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
      if (i !== num && i !== 1) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrimeNum(8));
