<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>
      欢迎使用VUE, <span @click="handleClick"> {{ username }}</span> !
    </h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    // 第一步: 派发(dispatch)一个action
    handleClick() {
      this.$store.dispatch("changeName");
    },
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>
