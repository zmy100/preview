var scoreArr = [96, 97, 76, 87, 87, 90, 91, 99, 78, 56];
var max = scoreArr[0];
for (var i = 1; i < scoreArr.length; i++) {
  if (max < scoreArr[i]) {
    max = scoreArr[i];
  }
}
console.log(max);
