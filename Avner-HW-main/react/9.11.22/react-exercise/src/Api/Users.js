import { useEffect, useState } from "react"
import PostsLists from "./PostsLists"
import TodosList from "./TodosList"
import UsersList from "./UsersList"



export default function Users() {

   const [users, setUsers] = useState([])
   const [posts, setPosts] = useState([])
   const [postsListsClassName, setPostsListsClassName] = useState("posts_list")
   const [todosListsClassName, setTodosListsClassName] = useState("todos_list")
   const [userId, setUserId] = useState(null)

   const [todos, setTodos] = useState([])

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((result) => {
            console.log(result)
            setUsers(result)
         })
   }, [])

   useEffect(() => {
      if (userId !== null) {
         fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
            .then((response) => response.json())
            .then((result) => {
               setPosts(result)
            })
      }
   }, [userId])


   useEffect(() => {
      if (userId !== null) {
         fetch("https://jsonplaceholder.typicode.com/todos?userId=" + userId)
            .then((response) => response.json())
            .then((result) => {
               setTodos(result)
            })
      }
   }, [userId])



   function showPostsById(_userId) {
      setTodosListsClassName("hidden_list")
      setPostsListsClassName("posts_list")
      setUserId(_userId)

   }

   function showTodosById(_userId) {
      setPostsListsClassName("hidden_list")
      setTodosListsClassName("todos_list")
      setUserId(_userId)

   }

   return (
      <div className="users_container">



         <UsersList
            users={users}
            showPostsById={showPostsById}
            showTodosById={showTodosById}
         />



         <PostsLists
            posts={posts}
            postsListsClassName={postsListsClassName}
         />
         <TodosList
         todos={todos}
         todosListsClassName={todosListsClassName}
         />

      </div>
   )
}
