import React, { useContext, useEffect, useState } from 'react'
import { User } from '../types';
import axios from 'axios';


export const UserContext = React.createContext({
    user: undefined as User | undefined,
    setUser: (u?: User) => { }
});
interface Props {
    children: React.ReactNode
}
export const useUserContext = () => {
    return useContext(UserContext);
}

export function UserContextProvider(props: Props) {
    const [user, setUser] = useState<User | undefined>()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        axios.defaults.headers.common.Authorization = 'Bearer ' + token;
        axios.get('/api/user').then(res => {
            setUser(res.data);
        })
    }, [])

    return (
        <UserContext.Provider value={{
            user, setUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
