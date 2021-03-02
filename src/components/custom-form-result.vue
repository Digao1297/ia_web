<template>
  <form id="custom-form-result" method="post" @submit.prevent="_send">
    <fieldset>
      <div class="form-group">
        <label class="form-label h6" for="input-available">Probability</label>
        <div class="form-group">
          <label class="form-radio form-inline h6 mx-2">
            <input
              type="radio"
              :value="10"
              v-model="algorithm.mutation_probability"
            /><i class="form-icon"></i>
            10%
          </label>
          <label class="form-radio form-inline h6 mx-2">
            <input
              type="radio"
              :value="20"
              v-model="algorithm.mutation_probability"
            /><i class="form-icon"></i>
            20%
          </label>
        </div>
        <label class="form-label h6" for="input-available"
          >Maximum number of population
        </label>
        <div class="form-group">
          <label class="form-radio form-inline h6 mx-2">
            <input
              type="radio"
              :value="50"
              v-model="algorithm.population_size"
            /><i class="form-icon"></i>
            50
          </label>
          <label class="form-radio form-inline h6 mx-2">
            <input
              type="radio"
              :value="100"
              v-model="algorithm.population_size"
            /><i class="form-icon"></i>
            100
          </label>
        </div>
      </div>
    </fieldset>
    <button
      :class="`btn btn-success ${loading ? 'loading disabled' : ''}`"
      type="submit"
      form="custom-form-result"
    >
      Register
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "custom-form-result",
  data: () => ({
    errors: [],
    loading: false,
    algorithm: {
      mutation_probability: 10,
      population_size: 50
    }
  }),
  components: {},

  methods: {
    ...mapActions({
      _actionSend: "result/actionSend"
    }),

    _send() {
      this.loading = !this.loading;
      this._actionSend(this.algorithm)
        .then(() => {
          this.loading = !this.loading;
        })
        .catch(() => (this.loading = false));
    }
  }
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
