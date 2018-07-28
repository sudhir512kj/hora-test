import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import { taskReducer } from "./taskReducer";

export default combineReducers({
  appState: appReducer,
  taskState: taskReducer,
  routing
});
