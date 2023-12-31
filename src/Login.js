import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validation from './LoginValidation';
import axios from 'axios'
import './App.css';

function Login() {
  const [values,SetValues]=useState({
    email:'',
    password:''
  })

  const navigate=useNavigate()

  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    SetValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    setErrors(validation(values))
    if(errors.email==="" && errors.password==="")
      {
        axios.post("http://localhost:5000/login", values)
        .then(res=>{
          if(res.data==="Success")
          {
            navigate('/home')
          }else{
            alert("You are not registered")
          }
        })
        .catch(err=>console.log(err))
      }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 background'>
      <div className='p-3 rounded w-25 form-bg'>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email'
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password'
            onChange={handleInput} className='form-control rounded-0'/>
             {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
          <p>Your agree to our terms and policies</p>
          <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
