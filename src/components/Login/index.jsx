import React from 'react';
import './Login.css'

const Login = () => {
    return(
        <form action="" className='form'>
            <div className="form-group">
                <label htmlFor="user">Username</label>
                <input type="text" name="user" id="user" placeholder="Username" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="form-group-check">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button className='submit' type='submit'>Login</button>
        </form>
    )
}

export { Login }