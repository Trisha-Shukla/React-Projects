import {createContext,useContext} from 'react'

export const TodoContext=createContext({
    todos:[],
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    addTodo:(todo)=>{},
    toggleTodo:(id)=>{},
})

export const TodoProvider=TodoContext.Provider;

export const useTodoContext=()=>{
    return useContext(TodoContext)
}