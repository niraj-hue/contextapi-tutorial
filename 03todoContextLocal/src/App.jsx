import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { ToDoProvider, ToDoContext, useToDo } from './context/index'
import { TodoForm, TodoItem } from './components/index'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  // every todo is in array as an object

  const addTodo = (todo) => {
    setTodos((prev)=>[
      {
        id: Date.now(),
        ...todo
      }, 
      ...prev
    ])
  }

  const updateTodo = (id, todo) => {
    setTodos( (prev) => prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo ) ) )
  }

  const deleteTodo = (id) => {
    setTodos( (prev) => prev.filter( (todo) => todo.id !== id ) )
  }

  const toggleComplete = (id) => {
    // console.log(id)
    setTodos( (prev) => 
      prev.map( (prevTodo) => 
        prevTodo.id === id ? {...prevTodo, iscomp: !prevTodo.iscomp} : prevTodo ) )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todosLocal"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todosLocal", JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className='p-2 text-4xl text-white text-center'>
        React | Todo with ContextAPI [Local]</h1>
      <div className='min-h-screen mx-auto p-3 my-6 text-center'>
        <h2 className='text-3xl'>Manage your To-Do</h2>
        <TodoForm />
        {todos.map( (todo) => (
          <div key={todo.id} className='max-w-xl mx-auto my-3'>
            <TodoItem todo={todo} />
          </div>
        ) )}
      </div>
    </ToDoProvider>
  )
}

export default App
