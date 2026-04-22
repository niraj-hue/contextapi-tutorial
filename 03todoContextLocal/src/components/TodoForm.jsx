import React, { useState } from 'react'
import { useToDo } from '../context/ToDoContext'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useToDo()

  const add = (e) => {

    e.preventDefault()
    if(!todo) return
    addTodo({todo, iscomp: false})
    setTodo("")
  }

  return (
    <form onSubmit={add}>
      <input 
        type="text" 
        name="todo-title" 
        id="title" 
        placeholder='Add todo' 
        value={todo} 
        onChange={(e)=> setTodo(e.target.value)} 
        className='ring ring-sky-500 border border-gray-800 rounded-l-xl my-10 p-3 px-5 w-100 text-lg text-white hover:ring-fuchsia-200'  
      />

      <button 
        className='border border-gray-800 rounded-r-xl p-3 text-lg text-white bg-green-500 hover:border-2  shrink-0 duration-75 transition-all'
      >Add Item</button>
    </form>
  )
}

export default TodoForm