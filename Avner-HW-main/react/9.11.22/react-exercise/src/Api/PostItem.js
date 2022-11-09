
export default function PostItem(props) {
    const post = props.post
  return (
    <p className="post_item" key={post.id} >{post.title}</p>
  )
}