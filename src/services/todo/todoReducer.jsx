import { GET_TODOS, UPDATE_TODO } from "./todoActionType";
import _ from "lodash";

const defaultState = {
  data: {},
  hasError: false,
  isPending: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }

      return {
        ...state,
        data: action.payload,
        hasError: false,
        isPending: action.meta.isPending
      };
    }

    case UPDATE_TODO: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }

      return {
        ...state,
        data: { ...state.data, ..._.keyBy([action.payload], "id") },
        hasError: false,
        isPending: action.meta.isPending
      };
    }

    default:
      return state;
  }
};
