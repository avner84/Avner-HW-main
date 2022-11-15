import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../redux/user/actions'

export default function User() {
    const { user, error } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const counter = useSelector((state) => state.counter)
    console.log('counter :', counter);
    
    useEffect(() => {
        dispatch(getUserAction(counter.count))
    }, [])


    if (error) {
        return <div>{error}</div>
    }
    console.log('user :', user);
    return (
        <div>
            <p>ID: <strong>{user.id}</strong></p>
            <p>Name:  {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Website: {user.website}</p>

        </div>
    )
}