<template>
  <form class="custom-form" action="#forms">
    <fieldset>
      <div class="form-group h6">
        <label class="form-label" for="input-discipline"
          ><i class="icon icon-message" /> Course name</label
        >
        <input
          class="form-input"
          type="text"
          id="input-discipline"
          placeholder="Ex: Linguagens e Paradigmas de Programação"
        />
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-workload"
          ><i class="icon icon-time" /> Workload</label
        >
        <select class="form-select">
          <option>Choose an option</option>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-name"
          ><i class="icon icon-people" /> Teacher's name</label
        >
        <input
          class="form-input"
          type="text"
          id="input-name"
          placeholder="Ex: Wilson Castello Branco Neto"
        />
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-available"
          ><i class="icon icon-search" /> Days of the week available</label
        >
        <select class="form-select">
          <option>Choose an option</option>
          <option>Mon</option>
          <option>Tue</option>
          <option>Wed</option>
          <option>The</option>
          <option>Fri</option>
        </select>
      </div>
    </fieldset>
    <button class="btn btn-success">Register</button>
    <button class="btn btn-error">Clear fields</button>
  </form>
</template>

<script>
export default {
  name: "custom-form",
};
</script>

<style scoped>
.btn-error {
  margin: 0 0 0 2%;
}

.icon {
  margin: 0 0 1% 0;
}
</style>



