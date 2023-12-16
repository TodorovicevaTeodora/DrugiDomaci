import React from 'react'
import Logo from '../../../components/logo/Logo'
import { useUserContext } from '../../../context/UserContext'
import { NavLink } from 'react-router-dom';
import UserInfo from '../../../components/userInfo/UserInfo';

export default function Navbar() {
    const { user } = useUserContext();
    return (
        <div className='navbar'>
            <NavLink style={{ height: '100%' }} to='/'>
                <Logo />
            </NavLink>
            {!user ? (
                <div>
                    <button className='nav-button'>
                        <NavLink className='link' to='/login'>Login</NavLink>
                    </button>
                    <button className='nav-button'>
                        <NavLink className='link' to='/register'>Register</NavLink>
                    </button>
                </div>
            ) : (
                <UserInfo />
            )}
        </div>
    )
}
