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
          v-model="form.name"
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
          step="2"
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
          v-model="form.teacher.name"
          placeholder="Ex: Wilson Castello Branco Neto"
        />
      </div>

      <div class="form-group">
        <label class="form-label h6" for="input-available"
          ><i class="icon icon-search" /> Days unavailable</label
        >
        <div class="form-group">
          <label
            class="form-checkbox form-inline h6 mx-2"
            v-for="choose in chooseUnavailable"
            :key="choose.id"
          >
            <input
              type="checkbox"
              :value="choose.name"
              v-model="form.teacher.unavailable"
            /><i class="form-icon"></i> {{ choose.name }}
          </label>
        </div>
      </div>
    </fieldset>
    <button class="btn btn-success" type="submit" form="custom-form">
      Register
    </button>
    <button class="btn btn-error" @click.prevent="_clear">Clear fields</button>
    <customtoast
      class="toast"
      v-if="errors.length > 0"
      errors="Please correct the errors!"
    />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import customtoast from "./custom-toast";
export default {
  name: "custom-form",
  data: () => ({
    errors: [],
    chooseUnavailable: [
      { id: 0, name: "Monday" },
      { id: 1, name: "Tuesday" },
      { id: 2, name: "Wednesday" },
      { id: 3, name: "Thursday" },
      { id: 4, name: "Friday" },
    ],
    form: {
      name: "",
      workload: 2,
      teacher: {
        name: "",
        unavailable: [],
      },
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
    ...mapActions({
      _actionCreateSchedules: "schadules/actionCreateSchedules",
    }),
    async _checkForm() {
      this.errors = [];

      if (this.form.name == null)
        this.errors.push("The name of the course is mandatory.");

      if (this.form.teacher.name == null)
        this.errors.push("Teacher's name is required.");

      if (this.form.teacher.unavailable.length == 0)
        this.errors.push("Choose from the menus an unavailable day.");

      if (this.errors.length == 0) {
        await this._actionCreateSchedules(this.form);
        this._clear();
      }
    },

    _clear() {
      this.form.name = "";
      this.form.workload = 2;
      this.form.teacher.name = "";
      this.form.teacher.unavailable = [];
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

.toast {
  margin: 32px 0 0 0;
}
</style>



