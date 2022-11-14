import { useParams } from "react-router"
// import { users } from "../demo_data/users"

import { useContext, useEffect } from "react";
import { ApiContext } from "./Context";

export default function UserInfo() {
   const params = useParams()
   const id = params.id;
   const { getUser, user } = useContext(ApiContext)

   useEffect(() => {
      getUser(id)
   }, [])

   return (
      <div>
         <h1>User Info</h1>
         <div>
            <p>ID: <strong>{user.id}</strong></p>
            <p>Name:  {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Website: {user.website}</p>
         </div>
      </div>
   )
}