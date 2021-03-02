import { api } from "./axios";

export const getAll = async url => await api.get(url);

export const post = async (url, data) => await api.post(url, data);

export const deleter = async (url, id) => await api.delete(`/${url}/${id}`);
