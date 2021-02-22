import * as types from './mutations.types'
import { get, getAll, post, edit, deleter } from '../../../api'

export const actionGetAllSchedules = async ({ dispatch }, payload) => await getAll('/')

export const actionGetSchedules = async ({ dispatch }, payload) =>
  await get('/', payload.id)

export const actionCreateSchedules = async ({ dispatch }, payload) => {
  const teacher = {
    name: payload.name,
    unavailable: payload.unavailable
  }

  const discipline = {
    name: payload.name,
    workload: payload.workload === null ? 2 : payload.workload,
    teacher: teacher
  }

  await post('/', discipline)
}

export const actionUpdateSchedules = async ({ dispatch }, payload) => {
  const teacher = {
    name: payload.name,
    unavailable: payload.unavailable
  }

  const discipline = {
    name: payload.name,
    workload: payload.workload === null ? 2 : payload.workload,
    teacher: teacher
  }

  await edit('/', payload.id, discipline)
}

export const actionDeleteSchedules = async ({ dispatch }, payload) =>
  await deleter('/', payload.id)

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
