var arr = [4, 11, 6, 2, 12, 9, 3, 1, 10, 8, 5, 7];
var tmp;
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - i; j++) {
    if (arr[j] < arr[j + 1]) {
      tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }
}
console.log(arr);
