var obj1 = {
  a: 1,
  b: 2,
  c: [
    33,
    44,
    {
      m: 55,
      n: 66,
      p: [77, 88],
    },
  ],
};
// 定义深克隆函数
function deepClone(obj1) {
  // 定义一个空对象
  var obj2 = {};
  // 遍历obj1
  for (var key in obj1) {
    if (typeof obj1[key] === "object") {
      obj2[key] = deepClone(obj1[key]);
    } else {
      obj2[key] = obj1[key];
    }
  }
  return obj2;
}
// obj2深克隆obj1
var obj2 = deepClone(obj1);
// 测试
console.log(obj1 === obj2);
