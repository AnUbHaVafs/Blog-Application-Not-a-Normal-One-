import React, { useState } from 'react'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
    return (
        <form className='register' onSubmit={(e) => { handleSubmit(e) }}>
            <h1>Register Page</h1>
            <input type="text" placeholder='username' onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
            <button>Register</button>
        </form>
    )
}

export default RegisterPage