import * as types from './mutations.types'

export default {
  [types.SET_SCHEDULES](state, payload) {
    state.discipline = payload
  },

  [types.SET_NAME_DISCIPLINE](state, payload) {
    state.discipline.name = payload
  },

  [types.SET_WORKLOAD](state, payload) {
    state.discipline.workload = payload
  },

  [types.SET_NAME_TEACHER](state, payload) {
    state.discipline.teacher.name = payload
  },

  [types.SET_UNAVAILABLE](state, payload) {
    state.discipline.teacher.unavailable = payload
  }
}
