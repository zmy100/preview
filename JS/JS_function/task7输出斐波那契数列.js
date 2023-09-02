function countFib(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return countFib(num - 1) + countFib(num - 2);
}
function getFib(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(countFib(i));
  }
  return arr.join("、");
}
console.log(getFib(7));
