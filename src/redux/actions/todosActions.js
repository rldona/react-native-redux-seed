import * as types from './actionsTypes';

export const createTodo = (todo) => ({
  type: types.CREATE_TODO,
  todo
});
