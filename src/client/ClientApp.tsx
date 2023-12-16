import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router'
import { useUserContext } from '../context/UserContext'
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';

export default function ClientApp() {
    const { user } = useUserContext();
    return (
        <div className='main'>
            <Navbar />
            <Routes>
                {
                    !user ? (
                        <>
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/register' element={<RegisterPage />} />
                        </>
                    ) : (
                        <>
                            <Route path='/cart' />
                            <Route path='/orders' />
                        </>
                    )
                }
                <Route path='/store/:id' />
                <Route path='/' />
            </Routes>
        </div>
    )
}
