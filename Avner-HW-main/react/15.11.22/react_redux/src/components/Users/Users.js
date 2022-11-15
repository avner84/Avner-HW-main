import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAction } from '../../redux/users/actions'

export default function Users() {
   const { users, error } = useSelector((state) => state.users)
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(getUsersAction())
   }, [])


   if (error) {
      return <div>{error}</div>
   }

   return (
      <div>
         {users.map((u) => {
            return <p>{u.name}</p>
         })}
      </div>
   )
}
