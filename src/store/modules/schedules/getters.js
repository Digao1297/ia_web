export const getSchedules = state => state.discipline

export const getWorkload = state => state.discipline.workload
export const getNameDiscipline = state => state.discipline.name
export const getNameTeacher = state => state.discipline.teacher.name
export const getUnavailable = state => state.discipline.teacher.unavailable
