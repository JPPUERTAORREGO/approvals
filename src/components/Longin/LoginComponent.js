import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginView } from './LoginView'
import users from '../../users.json'

export const LoginComponent =()=> {
    const [user, setUser] = useState({})
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleChangeEmail =(e)=> {
        setMail(e.target.value)
    }

    const handleChangePassword =(e)=> {
        setPassword(e.target.value)
    }

    const handleLogin =(e)=> {
        e.preventDefault()
        const userInput = users.filter( user => user.mail === mail & user.password === password ? user : null)
        setUser(userInput)
        userInput.length>0
        ?navigate('/proposals')  
        :navigate('/login')
    }


    return (
        <LoginView
        user = {user}
        mail = {mail}
        password = {password}
        handleChangeEmail = {handleChangeEmail}
        handleChangePassword = {handleChangePassword}
        handleLogin = {handleLogin}

        />
    )
}

// const {
//     user, 
//     handleChangeEmail,
//     handleChangePassword,
//     handleLogin
// } = props