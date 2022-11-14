import { PropTypes } from 'prop-types';

export default function UserPostsItem(props) {

    const {post} = props
  return (
    <div className="user_posts_item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>  
    </div>
  )
}

UserPostsItem.prototype={
    post:PropTypes.object.isRequired
}
