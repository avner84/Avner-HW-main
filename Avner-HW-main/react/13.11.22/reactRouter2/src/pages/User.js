import UserInfo from "../components/UserInfo"
import UserPosts from "../components/Posts/UserPosts"
import UserTodos from "../components/Todos/UserTodos"


export default function User() {
   return (
      <>
         <UserInfo />
         <UserTodos />
         <UserPosts />
      </>
   )
}
