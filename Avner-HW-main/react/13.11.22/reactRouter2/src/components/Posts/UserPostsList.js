import { useParams } from "react-router"
import { useContext, useEffect } from "react";
import { ApiContext } from "../Context";
import UserPostsItem from "./UserPostsItem";

export default function UserPostsList() {

    const params = useParams()
    const id = params.id;
    const { getUserPosts, userPosts } = useContext(ApiContext)
    console.log('UserPosts :', userPosts);

    useEffect(() => {
        getUserPosts(id)
    }, [])

    return (
        <div className="user_posts_list">
            {userPosts.map((post) => {
                return (
                    <UserPostsItem key={post.id} post={post} />
                )
            })}
        </div>

    )
}
