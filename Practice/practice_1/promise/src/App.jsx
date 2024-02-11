import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetPokemon from './components/GetPokemon'

function App() {
 
  // const [count, setCount] = useState(0)
  //     const returnTrue= new Promise((resolve,reject)=>{
  //           if((9+2)%2==0){
  //             resolve(3+2);
  //           }else{
  //             reject("it is not odd number")
  //           }


  //     })
  //     returnTrue
  //     .then(res=> console.log("the odd number is",res))
  //     .catch(err=>console.log("there is error",err));

  // function fiveHeads() {
  //   let head = 0;
  //   let attempt = 0;
  //   return new Promise( (resolve, reject) => {

  //       let flip=  Math.random() > 0.5 ? "head":"tails";
  //       if(flip=="head"){
  //         head++
  //        }else{
  //         head=0
  //        }
  //        attempt++
  //        if(head === 5){
  //         resolve(`It took ${attempt} attempts to get five heads`)
  //        }else if(attempt === 100){
  //         reject("you attempt more than 100")
  //        }
           
          
       
//     });
// }
// fiveHeads()
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );
// console.log( "When does this run now?" );
  return (
    <>
    <GetPokemon></GetPokemon>
    </>
  )
}

export default App
