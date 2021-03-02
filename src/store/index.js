import { createStore } from "vuex";
/** Modules */
import schadules from "./modules/schedules";
import result from "./modules/result";

export default createStore({
  modules: {
    schadules,
    result
  }
});
