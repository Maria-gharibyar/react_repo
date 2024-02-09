import { useState } from 'react'

import './App.css'
import UserDetails from './assets/components/UserDetails'
import Userform from './assets/components/Userform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Userform></Userform>
      <UserDetails username="maria" age={24} gender="famale"></UserDetails>
    </>
  )
}

export default App
