<template>
  <div class="result">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Population <i class="icon icon-people" /></th>
          <th>Mutation <i class="icon icon-emoji" /></th>
          <th>Execution <i class="icon icon-check" /></th>
          <th>Result <i class="icon icon-bookmark" /></th>
          <th>Time <i class="icon icon-time" /></th>
          <th>Generations <i class="icon icon-share" /></th>
        </tr>
      </thead>
      <tbody>
        <tr class="active">
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "result",
};
</script>

<style scoped>
.icon {
  margin: 0 0 2% 0;
}
</style>
