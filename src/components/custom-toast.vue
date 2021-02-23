<template>
  <div class="toast">
    {{ errors }}
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

