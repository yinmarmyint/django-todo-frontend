import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from "redux-form";
import TodoReducer from "../services/todo/todoReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    todo: TodoReducer,
    form
  });
