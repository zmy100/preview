var scoreArr = [96, 97, 76, 87, 87, 90, 91, 99, 78, 56];
var sum = 0;
var result;
for (var i = 0; i < scoreArr.length; i++) {
  sum += scoreArr[i];
}
result = sum / scoreArr.length;
console.log(result);
