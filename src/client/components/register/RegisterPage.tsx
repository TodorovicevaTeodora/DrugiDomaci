import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Input from '../../../components/Input';
import { useUserContext } from '../../../context/UserContext';

export default function RegisterPage() {
    const { register } = useUserContext()
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    return (
        <div className='register-page'>
            <h2 style={{ textAlign: 'center' }}>Register</h2>
            <form onSubmit={async e => {
                e.preventDefault();
                await register({
                    email,
                    password,
                    phone,
                    name: firstName + ' ' + lastName
                });
                navigate('/')
            }} >
                <Input
                    label='First name'
                    onChange={setFirstName}
                    value={firstName}
                    required
                />
                <Input
                    label='Last name'
                    onChange={setLastName}
                    value={lastName}
                    required
                />
                <Input
                    label='Phone number'
                    onChange={setPhone}
                    value={phone}
                    required
                    type='tel'
                />
                <Input
                    label='Email'
                    onChange={setEmail}
                    value={email}
                    required
                    type='email'
                />
                <Input
                    label='Password'
                    onChange={setPassword}
                    value={password}
                    required
                    type='password'
                />
                <button className='form-control btn btn-primary mt-3'>Register</button>
            </form>
        </div>
    )
}
