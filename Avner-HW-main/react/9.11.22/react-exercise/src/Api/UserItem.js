import Button from "./Button"

export default function UserItem(props) {
    const user = props.user
  return (
    <div >
    <p className="user_item"  key={user.id} >{user.name}</p>
    <Button
    text="Show posts"
    showListById={props.showPostsById}
    userId={user.id}
    />
     <Button
    text="Show todos"
    showListById={props.showTodosById}
    userId={user.id}
    />
    

    </div>
  )
}
