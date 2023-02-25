import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import "./loginScreen.scss"

const LoginScreen = () => {
    const dispatch = useDispatch()




    const accessToken = useSelector(state => state.auth.accessToken)
    console.log(accessToken);

    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()

    useEffect(() => {
        if (accessToken) {
            history.push('/')
        }
    }, [accessToken, history])
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