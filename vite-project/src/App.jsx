import { useState } from 'react'

import './App.css'
import PersonCard from './assets/components/ PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <PersonCard Fname={"Maria"} LastNAme={"Gharibyar"}haircolor={"brown"} age={24}></PersonCard>
    <PersonCard Fname={"Deo"} LastNAme={"Janson"}haircolor={"black"} age={34}></PersonCard>
    <PersonCard Fname={"Obama"} LastNAme={"barak"}haircolor={"brown"} age={4}></PersonCard>
    </div>
    
    </>
  )
}

export default App
