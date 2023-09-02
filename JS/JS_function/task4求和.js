// 定义一个函数, 接收两个数字, a 和 b, 返回从 a 加到 b 的和
function sum(a, b) {
  var sum = 0;
  for (var i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(3, 7));
