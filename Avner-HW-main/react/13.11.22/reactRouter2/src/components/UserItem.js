import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"


export default function UserItem(props) {
   const { user } = props
   
   return (
      <div className="user_list_item">
         <span> {user.name} </span>
         <span> <Link to={`/users/${user.id}/info`}>View User Info</Link> </span>
         <span> <Link to={`/users/${user.id}/todos`}>View User Todos</Link> </span>
         <span> <Link to={`/users/${user.id}/posts`}>View User Posts</Link> </span>
      </div>
   )
}

UserItem.propTypes = {
   user: PropTypes.object.isRequired
}