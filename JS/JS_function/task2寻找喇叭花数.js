// 题目：喇叭花数是这样的三位数：其每一位数字的阶乘之和恰好等于它本身。
// 即 abc = a! + b!+ c!，其中 abc 表示一个三位数
// 试寻找所有喇叭花数。

/**
 * 判断喇叭花数
 * @param {number} num
 * @returns {boolean}
 */
function check(num) {
  // 获取百位,十位,个位(用数学方法)
  //   var num1 = parseInt(num / 100);
  //   var num2 = parseInt((num / 10) % 10);
  //   var num3 = parseInt(num % 10);

  //获取百位,十位,个位(把数字转化成字符串的方式)
  var str = String(num);
  var num1 = Number(str[0]);
  var num2 = Number(str[1]);
  var num3 = Number(str[2]);

  //   判断是否是喇叭花数
  if (num === count(num1) + count(num2) + count(num3)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 计算阶乘
 * @param {number} num
 * @returns {number}
 */
function count(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
// 遍历100-999的三位数,判断喇叭花数
for (var i = 100; i <= 999; i++) {
  if (check(i)) {
    console.log(i);
  }
}
