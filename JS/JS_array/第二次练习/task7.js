var arr = ["有效", "无效", "有效", "无效", "无效", "有效"];
var newArray = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === "无效") {
    continue;
  }
  newArray.push(arr[i]);
}
console.log(newArray);
