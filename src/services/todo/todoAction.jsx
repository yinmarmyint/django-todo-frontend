import api from "axios-flow";
import {
  GET_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "./todoActionType";
import { API_URL } from "../../variables/constants";

const URL = `${API_URL}/api`;

export const getTodos = onSuccess => dispatch => {
  api(dispatch)
    .url(`${URL}/todos`)
    .action(GET_TODOS)
    .onSuccess(onSuccess)
    .get();
};

export const createTodo = (data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/`)
    .action(CREATE_TODO)
    .onSuccess(onSuccess)
    .data(data)
    .post();
};

export const deleteTodo = (todoId, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/${todoId}`)
    .action(DELETE_TODO)
    .onSuccess(onSuccess)
    .delete();
};

export const updateTodo = (todoId, data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/${todoId}/`)
    .action(UPDATE_TODO)
    .onSuccess(onSuccess)
    .data(data)
    .update();
};
