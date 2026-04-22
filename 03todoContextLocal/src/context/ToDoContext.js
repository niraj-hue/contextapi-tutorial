import {useContext, createContext} from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo Title",
            iscomp: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const ToDoProvider = ToDoContext.Provider

export const useToDo = () => {
    return useContext(ToDoContext)
}