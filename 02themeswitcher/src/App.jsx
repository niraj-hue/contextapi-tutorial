import react, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

    

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <h1 className='p-4 bg-linear-to-r from-neutral-500 via-red-500/50 to-neutral-500/30 text-center text-3xl m-2'>
        Light & Dark Mode using ContextAPI | useContext
      </h1>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  )
}

export default App
