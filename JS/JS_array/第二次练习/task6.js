var arr = [1, 2, "炸弹", 3, 4, "炸弹", 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] !== "炸弹") {
    sum += arr[i];
  }
}
console.log(sum);
