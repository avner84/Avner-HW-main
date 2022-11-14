import { useEffect, useState, createContext } from "react"

export const ApiContext = createContext(null)


export default function ApiContextProvider(props) {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [userTodos, setUserTodos] = useState([])
    const [userPosts, setUserPosts] = useState([])

    
    function getUsers() {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setUsers(result)
            })
    }

    function getUser(id) {
       
        if (typeof(id) !== "undefined") {
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setUser(result)
                })
        }
    }

    function getUserTodos(id) {
       
        if (typeof(id) !== "undefined") {
            fetch("https://jsonplaceholder.typicode.com/users/" + id+"/todos")
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setUserTodos(result)
                    console.log('UserPosts :', userPosts);
                })
        }
    }

    function getUserPosts(id) {
       
        if (typeof(id) !== "undefined") {
            fetch("https://jsonplaceholder.typicode.com/users/" + id+"/posts")
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setUserPosts(result)
                })
        }
    }

     

    return (
        <ApiContext.Provider value={{ users: users, user:user,userTodos:userTodos, userPosts: userPosts, getUsers:getUsers, getUser:getUser, getUserTodos:getUserTodos, getUserPosts:getUserPosts }}>
            {props.children}
        </ApiContext.Provider>
    )

}