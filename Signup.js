import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './LoginValidation'
import axios from 'axios';
function Signup() {
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
        
    }
    const handleSubmit=(event)=>{
            event.preventDefault();
            setErrors(validation(values));
            if(errors.email==='' && errors.password===''&& errors.name===''){
                axios.post('http://localhost:8081/signup', values)
                .then(res=>{
                    navigate('/');
                }
                )
                .catch(err=>console.log)
            }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25 '>
        <h2>Sign-up</h2>
        <form action=''>
        <div className='mb-3'>
                <label htmlFor='Name'><strong>Name</strong></label>
                <input type='text' placeholder='enter email' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Email'><strong>Email</strong></label>
                <input type='email' placeholder='enter email' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Password'><strong>Password</strong></label>
                <input type='password' placeholder='enter password'className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Phoneno'><strong>Phoneno</strong></label>
                <input type='tel' placeholder='enter email' className='form-control rounded-0'/>
            </div>
            <button className='btn btn-success w-100 rounded-4'>Signup</button>
            <p>If u already have a account?</p>
           <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Go to Login Page</strong></Link>
        </form>
    </div>
</div>
  )
}

export default Signup


