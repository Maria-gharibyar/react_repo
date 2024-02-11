import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetPokemon from './components/GetPokemon'

function App() {
 onst flip=()=>{return Math.random() > 0.5 ? "head":"tails"}
  function fiveHeads() {
    let head = 0;
    let attempt = 0;
    return new Promise( (resolve, reject) => {

  
        while( head < 5 && attempt<=100){ 
          attempt++
          let results=flip();
          if(results == "head"){
            head++
           }else{
            head=0
           }
        }
       
        
         if(attempt <= 100){
          resolve(`It took ${attempt} attempts to get five heads`)
         }else{
          reject(`Attempts have exceeded ${attempt} flips.`);
         }
           
          
       
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
  return (
    <>
    <GetPokemon></GetPokemon>
    </>
  )
}

export default App
