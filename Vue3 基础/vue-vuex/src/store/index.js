import { createStore } from "vuex";

export default createStore({
  state: {
    username: "zhangsan",
  },
  actions: {
    changeName() {
      // 第二步: store 感知到触发了一个changeName的action
      // 第三步,提交一个commit, 触发一个mutation, 名称叫做change
      this.commit("change");
    },
  },
  mutations: {
    change() {
      // 第四步: 对应的mutation会执行
      // 第五步, 在mutation中修改数据
      this.state.username = "张三";
    },
  },
  getters: {},
  modules: {},
});
