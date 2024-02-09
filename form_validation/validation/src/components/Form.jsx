import { spanIsSampled } from '@sentry/core';
import React, { useState } from 'react';
const Form=()=>{
        const[user,setuser]=useState("");
        const[usererr,setusererr]=useState(false);
        const[Lastname,setLastname]=useState("");
        const[Lasnameerr,setLasnameerr]=useState(false);
        const[email,setemail]=useState("");
        const[emailerr,setemailerr]=useState(false);
        const[password,setpassword]=useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [passwordMatch, setPasswordMatch] = useState(true);
        const[passerr,setpasserr]=useState(false);

        const handleConfirmPasswordChange = (e) => {
            const confirmedPassword = e.target.value;
            setConfirmPassword(confirmedPassword);
            setPasswordMatch(confirmedPassword === password);
        
            const userHandler=(e)=>{  
                setuser(e.target.value);
                    if(e.target.value.length<=2){
                        setusererr(true)
                    }else{
                        setusererr(false)
                    }
            }
            const LastHandler=(e)=>{  
                setLastname(e.target.value);
                    if(e.target.value.length<=2){
                        setLasnameerr(true)
                    }else{
                        setLasnameerr(false)
                    }
            }
            const formHandler = (e) => {
                e.preventDefault();
               
            }
        const emailhandler=(e)=>{
                setemail(e.target.value);
                if(e.target.value.length<=5){
                    setemailerr(true)
                }else{
                    setemailerr(false)
                }
        }   
            const passwoedHandle=(e)=>{
                    setpassword(e.target.value);
                    if(e.target.value.length <=8){
                        setpasserr(true)
                    }else{
                        setpasserr(false)
                    }
            }
         
        return(
            <>      <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="">Username:</label>
                    <input type="text" value={user}onChange={userHandler} />
                   {usererr? <p>First Name must least 2 character.</p>:null}
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" value={Lastname}onChange={LastHandler} />
                   {Lasnameerr? <p>Last Name must least 2 character.</p>:null}
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" value={email}onChange={emailhandler} />
                   {emailerr? <p>Email must least 5 character.</p>:null}
                </div>
               
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="text" value={password}onChange={passwoedHandle} />
                   {passerr? <p>Password must least 8 character.</p>:null}
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" value={confirmPassword} onChange={handleConfirmPassword} />
                    {!passwordMatch && <p>Passwords do not match.</p>}
                </div>



                <input type="submit" value="login" />
                </form>
            </>
        )
        
}
   
    
}
export default Form