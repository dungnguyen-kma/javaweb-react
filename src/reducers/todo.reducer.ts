import { createReducer } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo.type";
import todoInitialState from "../constants/todoInitialState";
import {
  addTodo,
  clearCompleted,
  removeTodo,
  updateTodo,
} from "../actions/todoActions";
import { TODO_STATUS } from "../constants/todo";

interface TodoState {
  todoList: TodoType[];
}
const initialState: TodoState = {
  todoList: todoInitialState,
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todoList.push(action.payload);
  });
  builder.addCase(removeTodo, (state, action) => {
    for (let i = 0; i < state.todoList.length; i++) {
      if (state.todoList[i].id === action.payload.id) {
        state.todoList.splice(i, 1);
      }
    }
  });
  builder.addCase(updateTodo, (state, action) => {
    const todo = state.todoList.find((todo) => todo.id === action.payload.id);
    if (todo) {
      todo.status =
        todo.status === TODO_STATUS.uncompleted
          ? TODO_STATUS.completed
          : TODO_STATUS.uncompleted;
    }
  });
  builder.addCase(clearCompleted, (state) => {
    const uncompletedJob = state.todoList.filter(
      (todo) => todo.status === TODO_STATUS.uncompleted
    );
    state.todoList = uncompletedJob
  });
});

export default todoReducer;
