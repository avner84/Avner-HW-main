import { PropTypes } from 'prop-types';

export default function UserTodosItem(props) {

    const {todo} = props
   
  return (
    <div className="user_todos_item">
<p>{todo.title} <span style={{ color:todo.completed ? "aqua" : "red"  }}>{todo.completed? "(Completed)" :"(Not complete)"}</span></p>

    </div>
  )
}

UserTodosItem.prototype={
    todo: PropTypes.object.isRequired
}