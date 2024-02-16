import todo from "../models/Todo";
import todos from "../models/Todos";

// get all todos
export const getTodos = (): todo[] => todos;

// get todo by id
export const getTodoById = (id: number): todo | undefined => {
  const todo = todos.find((todo) => todo.id === id);
  return todo;
};

// add a todo
export const addTodo = (todo: todo) => {
  todos.push(todo);
  return todos;
};

// delete a todo by id
export const deletTodo = (id: number) => {
  const idTodo = todos.findIndex((todo) => todo.id === id);
  if (idTodo !== -1) {
    return todos.splice(idTodo, 1);
  }
};

// update todo
export const updateTodo = (id: number, updatedTodo: todo) => {
  const idTodo = todos.findIndex((todo) => todo.id === id);
  if (idTodo !== -1) {
    todos[idTodo] = updatedTodo;
    return todos;
  }
  return null;
};
