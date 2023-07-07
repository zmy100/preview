var arr1 = [33, 44, [55, 66], [77, 88, [99, 11], [22, 33]]];

function deepClone(arr1) {
  var arr2 = [];
  for (var i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      arr2.push(deepClone(arr1[i]));
    } else {
      arr2.push(arr1[i]);
    }
  }
  return arr2;
}
var arr2 = deepClone(arr1);
console.log(arr1);
console.log(arr2);
// 检查是否修改arr1对arr2无影响
arr1[2].push(11);
console.log(arr1);
console.log(arr2);
