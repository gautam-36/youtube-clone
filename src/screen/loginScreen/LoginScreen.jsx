import React from 'react'
import "./loginScreen.scss"

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="YouTube" />
                <button>Login With Google</button>
                <p>This is an YouTube Clone</p>
            </div>
        </div>
    )
}

export default LoginScreen