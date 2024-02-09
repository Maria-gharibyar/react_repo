import { useState } from "react"

const Form=(props)=>{
    const {Users, setUsers} = props;
    const[username,setsuername]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");
    const[confirmpass,setconfirmpass]=useState("");

    const Register=(e)=>{
        e.preventDefault();
        const user={
            username,
            lastname,
            email,
            password,
            confirmpass
        }
        setUsers([...Users,user])
            
    }
    return(
        <>
            <form onSubmit={Register}>

                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" value={username} onChange={(e=>setsuername(e.target.value))} />

                </div>
                <div>
                    <label htmlFor="">Lastname</label>
                    <input type="text" value={lastname} onChange={(e=>setlastname(e.target.value))} />

                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e=>setpass(e.target.value))} />

                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" value={confirmpass} onChange={(e=>setconfirmpass(e.target.value))} />

                </div>
                    <input type="submit" value="register" />





            </form>
        
        </>
    )

}

export default Form