<template>
  <div>
    <input v-model="inputValue" type="text" />
    <button @click="handleClick">提交</button>
  </div>
  <ul>
    <list-item v-for="(item, index) of list" :key="index" :item="item" />
  </ul>
</template>

<script>
import { ref, reactive } from "vue";
// 引入组件
import ListItem from "./components/ListItem.vue";
export default {
  // 注册组件
  components: {
    "list-item": ListItem,
  },
  name: "ToDo",
  setup() {
    const inputValue = ref("");
    const list = reactive([]);
    const handleClick = () => {
      list.push(inputValue.value);
      inputValue.value = "";
    };
    return {
      inputValue,
      list,
      handleClick,
    };
  },
};
</script>

<style>
button {
  margin-left: 20px;
}
li {
  color: red;
}
</style>
