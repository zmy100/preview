<template>
  <div class="about">
    <h1>{{ username }} 你好! 这是介绍页面</h1>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>
