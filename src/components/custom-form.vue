<template>
  <form id="custom-form" method="post" @submit.prevent="_checkForm">
    <fieldset>
      <div class="form-group h6">
        <label class="form-label" for="input-discipline"
          ><i class="icon icon-message" /> Course name</label
        >
        <input
          required
          type="text"
          class="form-input"
          :rules="rules.other"
          name="input-discipline"
          v-model="form.nameDiscipline"
          placeholder="Ex: Linguagens e Paradigmas de Programação"
        />
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-workload"
          ><i class="icon icon-time" /> Workload</label
        >
        <input
          min="2"
          max="8"
          required
          type="number"
          class="form-input"
          name="input-workload"
          v-model="form.workload"
          placeholder="Ex: 4 hours"
        />
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-name"
          ><i class="icon icon-people" /> Teacher's name</label
        >
        <input
          required
          type="text"
          name="input-name"
          class="form-input"
          :rules="rules.other"
          v-model="form.nameTeacher"
          placeholder="Ex: Wilson Castello Branco Neto"
        />
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-available"
          ><i class="icon icon-search" /> Days unavailable</label
        >
        <select
          class="form-select"
          v-model="form.unavailable"
          name="input-available"
        >
          <option class="h6" value="0" selected disabled>
            Choose an option
          </option>
          <option
            class="h6"
            v-for="choose in chooseUnavailable"
            :key="choose.icon"
            :value="{ id: choose.id, text: choose.name }"
          >
            {{ choose.name }}
          </option>
        </select>
      </div>
    </fieldset>
    <button class="btn btn-success" type="submit" form="custom-form">
      Register
    </button>
    <button class="btn btn-error" @click.prevent="_clear">Clear fields</button>
    <customtoast v-if="errors.length" errors="Please correct the errors!" />
  </form>
</template>

<script>
import customtoast from "./custom-toast";
export default {
  name: "custom-form",
  data: () => ({
    errors: [],
    chooseUnavailable: [
      { id: 1, name: "Mon" },
      { id: 2, name: "Tue" },
      { id: 3, name: "Wed" },
      { id: 4, name: "The" },
      { id: 5, name: "Fri" },
      { id: 6, name: "Wed|Fri" },
      { id: 7, name: "The|Fri" },
    ],
    form: {
      workload: 2,
      unavailable: [],
      nameTeacher: null,
      nameDiscipline: null,
    },
    rules: {
      other: [
        (value) => !!value || "Required field.",
        (value) => value.length >= 6 || "At least 6 characters.",
      ],
    },
  }),
  components: {
    customtoast,
  },
  methods: {
    _checkForm() {
      if (this.nameDiscipline && this.nameTeacher && this.unavailable)
        return true;

      this.errors = [];

      if (!this.nameDiscipline)
        this.errors.push("The name of the course is mandatory.");

      if (!this.nameTeacher) this.errors.push("Teacher's name is required.");

      if (!this.unavailable)
        this.errors.push("Choose from the menus an unavailable day.");

      if (!this.errors.length) {
        this._clear();
      }
    },

    _clear() {
      this.form.workload = 2;
      this.form.unavailable = [];
      this.form.nameTeacher = "";
      this.form.nameDiscipline = "";
    },
  },
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



