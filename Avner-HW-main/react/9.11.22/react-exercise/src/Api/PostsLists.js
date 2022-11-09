import PostItem from "./PostItem"

export default function PostsLists(props) {
    const posts = props.posts
    return (
        <div className={props.postsListsClassName}>
            {posts.map((post) => {
                return(
                <PostItem
                    key={post.id}
                    post={post}
                />
                )
            })}
        </div>
    )
}
