
import { useState } from "react"

const Userform = ()=>{
    const [UserName,setUsername]=useState("");
    const [Lastname,SetLastname]=useState("");
    const [user,setUser]=useState("");
    

    const HandleSubmit=(e)=>{
        e.preventDefault();
        setUser({UserName,Lastname});
       setUsername("");
       SetLastname("");
    }
return (
    
    <>
    <form onSubmit={HandleSubmit}>
    <h2>User Form</h2>
    <button >Click Me</button>
    <input type="text" placeholder="username" value={UserName} onChange={(input)=>setUsername(input.target.value)} />
    <input type="text"  placeholder="Lastname" value={Lastname} onChange={(e)=>SetLastname(e.target.value)}/>
   
    </form>
    <p>Username:{user.UserName}</p>
    <p>LastName:{user.Lastname}</p>
    </>
)

}
export default Userform;