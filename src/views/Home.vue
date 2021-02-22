<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    hello: () => import(/* webpackChunkName: "hello" */ '@/components/hello.vue')
  }
}
</script>
