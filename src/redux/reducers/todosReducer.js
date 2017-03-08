import * as types from '../actions/actionsTypes';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_TODO:

      console.log(state);

      return [
        ...state,
        Object.assign({}, action.todo)
      ];
    default:
      return state;
  }
}
