// 寻找喇叭花数
// 遍历100-999所有的三位数
for (var i = 100; i <= 999; i++) {
  if (isCheck(i)) {
    console.log(i + "是喇叭花数");
  }
}

// 判断喇叭花数
function isCheck(num) {
  // 数字转字符串
  var str = num.toString();
  // 百位
  var num1 = Number(str[0]);
  // 十位
  var num2 = Number(str[1]);
  // 个位
  var num3 = Number(str[2]);
  // 计算阶乘之和
  var result = factorial(num1) + factorial(num2) + factorial(num3);
  //   判断计算结果是否和原来的三位数相等
  return result === num;
}

// 计算阶乘
function factorial(num) {
  var sum = 1;
  for (var i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}
