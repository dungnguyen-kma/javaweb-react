import { createReducer } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo.type";
import todoInitialState from "../constants/todoInitialState";

interface TodoState {
  todoList: TodoType[];
}
const initialState: TodoState = {
  todoList: todoInitialState ,
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const todoReducer = createReducer(initialState, (builder) => {});

export default todoReducer
