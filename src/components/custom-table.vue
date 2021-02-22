<template>
  <table class="custom-table table table-striped table-hover">
    <thead>
      <tr>
        <th>Discipline <i class="icon icon-message" /></th>
        <th>Workload <i class="icon icon-time" /></th>
        <th>Teacher <i class="icon icon-people" /></th>
      </tr>
    </thead>
    <tbody>
      <tr class="active">
        <td>Linguagens e Paradi...</td>
        <td>Wilson Castello ...</td>
        <td>4 hours</td>
      </tr>
      <tr>
        <td>Linguagens e Paradi...</td>
        <td>Wilson Castello ...</td>
        <td>4 hours</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "custom-table",
};
</script>

<style scoped>
.icon {
  margin: 0 0 2% 0;
}
</style>