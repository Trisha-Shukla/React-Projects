import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/Todo'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const localData=localStorage.getItem("todoList")
    console.log(localData);
    
    if(localData && localData.length>0) setTodos(JSON.parse(localData))
  },[])

  useEffect(()=>{
    if(todos.length>0)
    localStorage.setItem("todoList",JSON.stringify(todos))
  },[todos])
  

  const addTodo=(todo)=>{
    const addedTodo=[{...todo},...todos];
    setTodos(addedTodo);
  }
  
  

  const updateTodo=(id,todo)=>{
    const copyTodos=todos.map((cTodo)=>{
      return (cTodo.id===id)?todo:cTodo;
    })
    setTodos(copyTodos);
  }

  const deleteTodo=(id)=>{
    const deletingTodo=todos.filter((item)=>{
      return (item.id!==id)
    })
    setTodos(deletingTodo);
  }
  const toggleTodo=(id)=>{
    const togglingTodo=todos.map((item)=>{
      console.log(item);
      console.log(id);
      
      return (item.id===id)?{...item,completed: !item.completed}:item;
      
      
    })
    console.log(togglingTodo);
    
    setTodos(togglingTodo);
  }
  return (
    <TodoProvider value={{todos,updateTodo,addTodo,deleteTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>{
                            console.log(todo);
                            
                            return(
                              <div className='w-full' key={todo.id}>
                                <TodoItem todo={todo}/>
                              </div>
                            )
                          })
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
