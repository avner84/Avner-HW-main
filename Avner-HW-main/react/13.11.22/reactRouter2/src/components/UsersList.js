// import { users } from "../demo_data/users"
import UserItem from "./UserItem"

import { useContext, useEffect } from "react";
import { ApiContext } from "./Context";


export default function UsersList() {

   const {users, getUsers } = useContext(ApiContext)
   useEffect(() => {
      getUsers()        
  }, [])
   return (
      <div className="users_list">
         {users.map((user) => {
            return <UserItem key={user.id} user={user} />
         })}
      </div>
   )
}
