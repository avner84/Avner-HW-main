import Button from "./Button"

function TodoItem(props) {
   const todo = props.todo

   return (
      <div className="todo_item" id={todo.id}>
         <span>{todo.id}.</span>
         <span onClick={() => props.completeTodo(todo.id)} style={{ color: todo.completed ? "green" : "red" }} >{todo.text}</span>

         <Button text="X" color="black" handler={() => props.deleteTodo(todo.id)} />
      </div>
   )
}


export default TodoItem