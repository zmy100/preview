const person = {
  username: "xiaoming",
  age: 18,
  sex: "female",
};
console.log(
  `大家好, 我叫${person.username}, 今年${person.age}岁, 我是一个${
    person.sex === "male" ? "男" : "女"
  }生`
);
