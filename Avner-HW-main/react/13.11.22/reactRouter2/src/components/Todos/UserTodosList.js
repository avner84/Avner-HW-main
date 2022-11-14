import { useParams } from "react-router"
import { useContext, useEffect } from "react";
import { ApiContext } from "../Context";
import UserTodosItem from "./UserTodosItem";


export default function UserTodosList() {

    const params = useParams()
    const id = params.id;
    const { getUserTodos, userTodos } = useContext(ApiContext)

    useEffect(() => {
        getUserTodos(id)
    }, [])

    return (
        <div className="user_todos_list">

            {userTodos.map((todo) => {
                return (
                    <UserTodosItem key={todo.id} todo={todo} />
                )
            })}
        </div>
    )
}
