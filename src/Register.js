import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './RegisterValidation';
import { useState } from 'react';
import axios from 'axios'
import './App.css';

function Register() {

  const [values,SetValues]=useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:''
  })

  const navigate=useNavigate()

  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    SetValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    // console.log(values.password)
    // console.log(values.confirmpassword)
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    setErrors(validation(values))
      if(errors.name==="" && errors.email==="" && errors.password==="" && errors.confirmpassword==="")
      {
        axios.post("http://localhost:5000/register", values)
        .then(res=>{navigate('/')})
        .catch(err=>console.log(err))
      }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 background'>
      <div className='p-3 rounded w-25 form-bg'>
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input type='text' placeholder='Enter Name' name='name'
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
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
          <div className='mb-3'>
            <label htmlFor='password'><strong>Confirm Password</strong></label>
            <input type='password' placeholder='Enter Confirm Password' name='confirmpassword' 
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.confirmpassword && <span className='text-danger'>{errors.confirmpassword}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
          <p>Your agree to our terms and policies</p>
          <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
