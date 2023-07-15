var arr = [
  "吕布",
  "赵云",
  "关羽",
  "典韦",
  "赵云",
  "黄忠",
  "关羽",
  "马超",
  "张飞",
  "黄忠",
];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  if (!arr2.includes(arr[i])) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
