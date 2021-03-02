import * as types from "./mutations.types";
import { post } from "../../../api";

export const actionSend = ({ dispatch }, payload) => {
  return post("/algorithms", { algorithm: payload })
    .then(response => {
      let data = response.data.generation;
      let calender = [];

      for (let i = 0; i < 4; i++) {
        let week = data.slice(i * 10, (i + 1) * 10);
        console.log(week);
        calender[i] = [];
        for (let j = 0; j < 2; j++) {
          if (j == 0) {
            calender[i][j] = week.slice(0, week.length / 2);
          } else {
            calender[i][j] = week.slice(week.length / 2, week.length);
          }
        }
      }

      console.log(calender);
      dispatch("actionSetResult", calender);
    })
    .catch(error => console.log(error));
};

export const actionSetResult = ({ commit }, payload) =>
  commit(types.SET_RESULT, payload);
