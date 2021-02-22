<template>
  <div class="toast" :errors="errors">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    errors: {
      type: String,
      required: true,
    },
  },
};
</script>

