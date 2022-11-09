import UserItem from "./UserItem"

export default function UsersList(props) {
    const users = props.users
    return (
        <div className="users_list">
            {users.map((user) => {
                return (
                    <UserItem
                        key={user.id}
                        showPostsById={props.showPostsById}
                        showTodosById={props.showTodosById}
                        user={user}
                    />
                )

            })}
        </div>
    )
}
