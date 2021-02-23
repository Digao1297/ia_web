<template>
  <table class="custom-table table table-striped table-hover">
    <thead>
      <tr>
        <th>Discipline <i class="icon icon-message" /></th>
        <th>Teacher <i class="icon icon-people" /></th>
        <th>Workload <i class="icon icon-time" /></th>
        <th>Delete <i class="icon icon-delete" /></th>
      </tr>
    </thead>
    <tbody>
      <tr class="active" v-for="schedule in _getSchedules" :key="schedule.id">
        <td>{{ schedule.name }}</td>
        <td>{{ schedule.teacher.name }}</td>
        <td>{{ schedule.workload }}</td>

        <td>
          <i
            class="delete icon icon-delete"
            alt="Delete this option."
            @click.prevent="_delete(schedule.id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "custom-table",
  methods: {
    ...mapActions({
      _actionDeleteSchedules: "schadules/actionDeleteSchedules",
    }),

    _delete(id) {
      this._actionDeleteSchedules(id);
    },
  },
  computed: {
    ...mapGetters({
      _getSchedules: "schadules/getSchedules",
    }),
  },
};
</script>

<style scoped>
.icon {
  margin: 0 0 2% 0;
}

.delete {
  cursor: pointer;
}
</style>
