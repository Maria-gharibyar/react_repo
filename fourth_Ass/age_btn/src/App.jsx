import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prop from './components/Prop'

function App() {
 

  return (
    <>
     <Prop Fname={"Doe"} Lname={"Jane"} age={45} hair={"Black"} ></Prop>
     <Prop Fname={"Smit"} Lname={"Johan"} age={32} hair={"brwon"} ></Prop>
    </>
  )
}

export default App
