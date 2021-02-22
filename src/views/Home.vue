<template>
  <div class="home">
    <form />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    form: () => import(/* webpackChunkName: "hello" */ "@/components/form.vue"),
  },
};
</script>
