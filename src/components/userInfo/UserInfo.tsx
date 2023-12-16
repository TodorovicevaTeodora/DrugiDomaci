import React from 'react'
import { useUserContext } from '../../context/UserContext'
export default function UserInfo() {
    const { user, logout } = useUserContext();
    return (
        <div className='user-info'>
            <div className='info'>
                {user?.name || 'Lazar Milosavlejv'}
            </div>
            <button onClick={logout} className='nav-button'>
                Logout
            </button>
        </div>
    )
}
