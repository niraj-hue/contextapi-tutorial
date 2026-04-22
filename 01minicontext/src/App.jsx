import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <UserContextProvider>
      <h1>Chai aur React with ContextAPI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
