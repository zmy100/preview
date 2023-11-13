var obj = {
  name: "zhangsan",
  demo: function () {
    console.log(this);
  },
};
obj.demo(); // obj
