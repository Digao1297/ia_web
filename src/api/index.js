import { api } from './axios'

export const getAll = async (url) =>
  await api.get(url)

export const get = async (url, id) =>
  await api.get(`${url}/${id}`)

export const post = async (url, data) =>
  await api.post(url, data)

export const edit = async (url, id, data) =>
  await api.put(`${url}/${id}`, data)

export const deleter = async (url, id) =>
  await api.delete(`${url}/${id}`)
