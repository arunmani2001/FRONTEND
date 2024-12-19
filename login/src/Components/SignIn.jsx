import React,{useEffect, useState} from 'react'
import '../style/SignIn.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignIn(){
  let [username,setusername]=useState("");
  let [password,setpassword]=useState("");
  let [Admin,setAdmin]=useState([])
  useEffect(()=>{
    async function fetchAdmin(){
      let data=await fetch('http://localhost:1000/Admin')
      let res=await data.json();
      setAdmin(res)
      
    }fetchAdmin()
  },[])

  let naviagate = useNavigate();

  function login(){
    let val=Admin.filter((x)=>{
      return x.email === username && x.password === password})
    if (val.length>0){
      alert('login successfully')
      naviagate('/homepage')
    }else{
      alert('invalid username password')
    }
  }  
  
  return (
    <div className='Adminlogin'>
      <form action="">
        <label htmlFor="">username:</label>
        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='enter the useremail' required /> 
        <label htmlFor="">password</label>
        <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='enter the password' required />
        <br />
        <button onClick={login}>login</button>
        <span>Click here to <Link to='/adminsignup'>Signup</Link></span>
      </form>
    </div>
  )
}

export default SignIn;
