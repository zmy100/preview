// 定义一个函数, 判断用户传入的数字是否是一个质数
// 如果该数是素质数，则函数的返回值为 true，否为 false。
function isPrimeNum(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      if (num !== i && i !== 1) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrimeNum(11));
