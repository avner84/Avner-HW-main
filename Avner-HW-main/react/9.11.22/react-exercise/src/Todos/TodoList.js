import TodoItem from "./TodoItem"

function TodoList(props) {
   return (
      <div className="todo_list">
         {props.todos.map((todo) => {
            return (
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodo={props.deleteTodo}
                  completeTodo={props.completeTodo}
               />
            )
         })}
      </div>
   )
}

export default TodoList