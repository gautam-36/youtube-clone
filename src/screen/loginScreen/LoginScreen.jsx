import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import "./loginScreen.scss"

const LoginScreen = () => {
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(login())
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="YouTube" />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This is an YouTube Clone</p>
            </div>
        </div>
    )
}

export default LoginScreen