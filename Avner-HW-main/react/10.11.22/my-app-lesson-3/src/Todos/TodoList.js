import TodoItem from "./TodoItem"
import { PropTypes } from 'prop-types'

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

TodoList.prototype={
   todos: PropTypes.array.isRequired,
   deleteTodo: PropTypes.func.isRequired,
   completeTodo: PropTypes.func.isRequired
}

export default TodoList