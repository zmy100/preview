// 张三入职新公司，月薪一万元。
// 工资每年涨幅 5%。补充代码，计算出张三工作 20 年后，月薪为多少？

function countSalary(year) {
  if (year == 1) {
    return 10000;
  }
  return 1.05 * countSalary(year - 1);
}
console.log(countSalary(20));
