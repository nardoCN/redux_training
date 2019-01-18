import { combineReducers } from "redux";
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text
        }
      ];
    case "REMOVE_TODO":
      return state
        .slice(0, action.index)
        .concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos
});

export default todoApp;
