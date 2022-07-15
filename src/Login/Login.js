import React  from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export function LogIn(props)  {

    return( 
        <div className='container'>

        <div className='welcome'>
            Welcome ! 
        </div>

        <form className='Login-form'>

        <div className='firstname'>
            <label>First Name </label>
            <input type='text'/>
        </div>

        <div className='lastname'>
            <label>Last Name </label>
            <input type='text'/>
        </div>

        <div className='contact'>
            <label>Contact Number </label>
            <input type='number'/>
        </div>

        <div className='password'>
            <label>Password </label>
            <input type='password'/>
        </div>

        <div className='submit'>
        <Link to='/movie'>
            <button type='submit'>Submit</button>
        </Link>
        </div>
        </form>
        </div>
    )
}