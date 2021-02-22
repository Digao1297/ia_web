<template>
  <div class="home columns col-gapless">
    <div class="column col-4">
      <customform class="custom-form" />
    </div>
    <div class="column col-8">
      <customtable class="custom-table" />
    </div>
  </div>
</template>

<script>
import customform from "@/components/custom-form";
import customtable from "@/components/custom-table";

export default {
  name: "home",
  components: {
    customform,
    customtable,
  },
};
</script>

<style scoped>
.custom-form {
  margin: 2%;
}

.custom-table {
  margin: 0 4% 0 2%;
}
</style>
