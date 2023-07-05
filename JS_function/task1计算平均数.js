// 编写一个函数, 参数个数不限, 返回各参数的平均值
function avg() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}
console.log(avg(1, 2, 3, 4,5));
