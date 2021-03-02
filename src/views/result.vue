<template>
  <div class="result">
    <div class="form-result">
      <customFormResult />
    </div>
    <custom-table-result
      v-for="(item, index) in _getResult"
      :key="index"
      :title="`Phase ${(index + 1) * 2}º`"
      :items="item"
    />
  </div>
</template>

<script>
import customFormResult from "@/components/custom-form-result.vue";
import customTableResult from "@/components/custom-table-result.vue";
import { mapGetters } from "vuex";

export default {
  name: "result",
  components: {
    customFormResult,
    customTableResult
  },
  computed: {
    ...mapGetters({ _getResult: "result/getResult" })
  }
};
</script>

<style scoped>
.form-result {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
.icon {
  margin: 0 0 2% 0;
}
.week {
  height: 120px;
}
.day {
  border: 1px solid black;
  width: 70%;
  height: 70%;
}
</style>
