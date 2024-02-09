import { useState } from 'react'
import Form from './components/Form'

import Details from './components/Details'


function App() {
  const [Users, setUsers] = useState([])

  return (
    <>
      <Form Users={Users} setUsers={setUsers}></Form>
      <Details Users={Users}></Details>
    </>
  )
}

export default App
