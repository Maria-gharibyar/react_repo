import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyList from './components/MyList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyList></MyList>
      
    </>
  )
}

export default App
