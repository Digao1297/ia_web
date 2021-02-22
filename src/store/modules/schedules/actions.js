import * as types from './mutations.types'

export const actionGetAllSchedules = async ({ dispatch }, payload) => {
}

export const actionGetSchedules = async ({ dispatch }, payload) => {
}

export const actionCreateSchedules = async ({ dispatch }, payload) => {
}

export const actionUpdateSchedules = async ({ dispatch }, payload) => {
}

export const actionDeleteSchedules = async ({ dispatch }, payload) => {
}

export const actionSchedules = async ({ commit }, payload) =>
  commit(types.SET_SCHEDULES, payload)

export const actionWorkload = async ({ commit }, payload) =>
  commit(types.SET_WORKLOAD, payload)

export const actionNameDiscipline = async ({ commit }, payload) =>
  commit(types.SET_NAME_DISCIPLINE, payload)

export const actionNameTeacher = async ({ commit }, payload) =>
  commit(types.SET_NAME_TEACHER, payload)

export const actionUnavailable = async ({ commit }, payload) =>
  commit(types.SET_UNAVAILABLE, payload)
