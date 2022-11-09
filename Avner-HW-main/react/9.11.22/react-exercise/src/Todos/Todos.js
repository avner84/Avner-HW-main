import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"

export default function Todos(props) {

   const [todos, setTodos] = useState([{ id: 1, text: "Run", completed: false }, { id: 2, text: "Swimming", completed: true }])


   function onAddTodo(todo) {
      const newTodos = [todo, ...todos]
      setTodos(newTodos)
   }

   function onDeleteTodo(todoId) {
      const newTodos = todos.filter((todo) => todo.id !== todoId)
      setTodos(newTodos)
   }


   function onCompleted(todoId) {
      const index = todos.findIndex((todo) => todo.id === todoId)

      const newTodos = [...todos]

      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
   }


   return (
      <div className="todos_container">
         <AddTodoForm addTodo={onAddTodo} />
         <TodoList
            todos={todos}
            deleteTodo={onDeleteTodo}
            completeTodo={onCompleted}
         />
      </div>
   )
}






