var general = [
  "吕布",
  "赵云",
  "典韦",
  "关羽",
  "马超",
  "张飞",
  "黄忠",
  "许储",
  "孙策",
  "太史慈",
  "夏侯敦",
  "夏侯渊",
  "张辽",
  "张颌",
  "徐晃",
  "庞德",
  "甘宁",
  "周泰",
  "魏延",
];
var arr = [];
var randomNum = 0;
while (arr.length < 3) {
  randomNum = parseInt(Math.random() * general.length);
  if (!arr.includes(general[randomNum])) {
    arr.push(general[randomNum]);
  }
}
console.log(arr);
