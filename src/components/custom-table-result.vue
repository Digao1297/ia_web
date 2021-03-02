<template>
  <div class="result-table">
    <h5 class="m-2">{{ title }}</h5>
    <table class="custom-table-result table table-striped table-hover">
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Truesday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active" v-for="(period, index) in items" :key="index">
          <td v-for="item in period" :key="item.id">{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "custom-table-result",
  props: {
    title: {
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.result-table {
  margin: 2rem 0 2rem 0;
}
</style>
