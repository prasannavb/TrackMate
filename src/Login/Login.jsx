import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router";

const Login=()=>
{
    const [isAccount,SetAccount]=useState(true)
    const [Ack,SetAck]=useState(true)
    const [formdata,Setformdata]=useState({EmployeeId:'',password:''})
    const [Errmsg,SetErr]=useState({EmployeeIdmsg:'',passwordmsg:''})
    const Navigate=useNavigate()

    const LoginIntoAccount=()=>
    {
        console.log("Eter")
        Navigate("/Home")
    }

    const ValidateForm=()=>
    {
        if(formdata.EmployeeId.trim()==="" || formdata.EmployeeId===null)
            {
                SetErr((prev)=>{return({...prev,EmployeeIdmsg:'Enter your Employee Id'})})
                SetAck(true)
            }
            else
            {
                SetErr((prev)=>{return({...prev,EmployeeIdmsg:''})})
                SetAck(false)
            }
    
            if(formdata.password.trim()==="" || formdata.password===null)
            {
                SetErr((prev)=>{return({...prev,password:'Enter your password'})})
                SetAck(true)
            }
            else
            {
                SetErr((prev)=>{return({...prev,password:''})})
                SetAck(false)
            }
    
            if(formdata.EmployeeId!=="" && formdata.EmployeeId!=null   && formdata.password!=="" && formdata.password!==null)
            {
                LoginIntoAccount()
            }
    }

    const FormDetailsChange=(e)=>
    {
        const {name,value}=e.target
        Setformdata((prev)=>{return({...prev,[name]:value})})
    }

    return(
        <div className="Login">
            <div className="Login-container"></div>        
            <div className="Login-Form">
                {isAccount?(<h2>Login</h2>):(<h2>Sign Up</h2>)}
                <div className="Login-Form-EmployeeId">
                     <label className="Login-Form-EmployeeId-label" htmlFor="">Employee Id :</label>
                     <input type="text" name='EmployeeId' value={formdata.EmployeeId}  placeholder="Enter employee Id" onChange={FormDetailsChange} autoComplete="off" required/>
                     {Ack?(<span className="Errormsg">{Errmsg.EmployeeIdmsg}</span>):(<span className="Errormsg">{Errmsg.EmployeeIdmsg}</span>)}
                 </div>
                 <div className="Login-Form-Password">
                     <label className="Login-Form-Password-label" htmlFor="">Password:</label>
                     <input type="password" name='password' value={formdata.password}  placeholder="Password" onChange={FormDetailsChange} autoComplete="off" required/>
                     {Ack?(<span className="Errormsg">{Errmsg.password}</span>):(<span className="Errormsg">{Errmsg.password}</span>)}
                 </div>
                {isAccount?(
                    <>
                        <button onClick={ValidateForm}>Login</button>
                        <span className="Login-Form-NoAccount" onClick={()=>{SetAccount(false),SetAck(false),Setformdata({EmployeeId:'',password:''}),SetErr({EmployeeIdmsg:'',passwordmsg:''})}}>Dont have an account?</span>
                    </>):(
                        <>
                            <button onClick={ValidateForm}>Sign Up</button>
                            <span className="Login-Form-NoAccount" onClick={()=>{SetAccount(true),SetAck(false),Setformdata({EmployeeId:'',password:''}),SetErr({EmployeeIdmsg:'',passwordmsg:''})}}>Already have an account?</span>
                        </>
                    )}
            </div>
        </div>
    )
}

export default Login;