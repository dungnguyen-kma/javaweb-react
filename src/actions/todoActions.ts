import { createAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo.type";

export const addTodo = createAction<TodoType>("ADD_TODO");
export const removeTodo = createAction<TodoType>("REMOVE_TODO");
export const updateTodo = createAction<TodoType>("UPDATE_TODO");
export const clearCompleted = createAction<TodoType>("CLEAR_COMPLETED");
