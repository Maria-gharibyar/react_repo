import { useState } from 'react'
import Form from './components/Form'
import Details from './components/Details'



function App() {
const [Users,SetUsers]=useState([])
  return (
    <>
      <Form Users={Users} SetUsers={SetUsers}></Form>
      <Details Users={Users}></Details>
    </>
  )
}

export default App
