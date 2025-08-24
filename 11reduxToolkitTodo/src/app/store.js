// This is a store file
import { configurestore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configurestore({
	reducer: todoReducer, 
});
