<template>
  <div class="home columns col-gapless">
    <div class="column col-4">
      <customform class="customform" />
    </div>
    <div class="column col-8">col-7</div>
  </div>
</template>

<script>
import customform from "@/components/custom-form";

export default {
  name: "home",
  components: {
    customform,
  },
};
</script>

<style scoped>
.customform {
  margin: 2%;
}
</style>
