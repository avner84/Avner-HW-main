import { useRef } from "react"
import Button from "./Button"
import { PropTypes } from 'prop-types';


function AddTodoForm(props) {
   const input = useRef()

   function handleSubmit(event) {
      event.preventDefault()

      const todo = {
         id: Math.floor(Math.random() * 100000000000),
         text: input.current.value,
         completed: false
      }

      props.addTodo(todo)
   }

   return (
      <form className="todo_form" onSubmit={handleSubmit}>
         <input ref={input} type="text" />
         <Button color="red" text="Submit" />
      </form>
   )
}

AddTodoForm.propTypes ={
   handleSubmit:  PropTypes.func,
   input: PropTypes.string
}

export default AddTodoForm