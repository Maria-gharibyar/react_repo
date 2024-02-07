import { useState } from "react"

const Prop=(props)=>{
    const[newage,setnewage]=useState(props.age)
    return(
        <>
            <h2>{props.Fname},{props.Lname}</h2>
            <p>Age:{newage}</p>
            <p>Hair Color:{props.hair}</p>
            <button onClick={(e)=>setnewage(newage + 1)}>Birthday Button for {props.Fname} {props.Lname} </button>
        </>
    )
}
export default Prop