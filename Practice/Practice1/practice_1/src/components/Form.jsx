import { useState } from "react"

const Form = (props)=>{
    const { Users, SetUsers } = props;
    const[Username,setUsername]=useState();
    const[Email,setEmail]=useState();
    const Rigester=(e)=>{
        e.preventDefault();
        const user={
            Username,
            Email
        }
        SetUsers([...Users, user]); 
        setUsername("");
        setEmail("")
    }
    return(
        <>
        <form onSubmit={Rigester}>
        <div>
            <label htmlFor="">UserName:</label>
            <input type="text"  value={Username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
            <input type="submit" value={"rgister"}/>
            </form>
        </>
    )

}
export default Form