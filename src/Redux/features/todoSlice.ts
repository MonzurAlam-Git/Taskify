import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TToDo = {
  id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TToDo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<TToDo>) => {
      // state.todos.push(action.payload);
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleState: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo!.isCompleted = !todo?.isCompleted;
    },
  },
});

export const { addToDo, removeToDo, toggleState } = todoSlice.actions;
export default todoSlice.reducer;

{
  /* data can be sent in two ways. 
  1. Whole data sent and receives in action.payload       
  Ex: state.todos.push(action.payload);

  2. partial Data send , and let  redux handle the rest
  Ex : state.todos.push({ ...action.payload, isCompleted: false });
  */
}
