export default function TodoItem(props) {
  const todo = props.todo
  return (
    <p className="todo_item" key={todo.id} >{todo.title}</p>
  )
}
