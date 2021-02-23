import * as types from './mutations.types'

export default {
  [types.SET_SCHEDULES](state, payload) {
    state.disciplines = payload
  }
}
