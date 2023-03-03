import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../../public/features/postSlice";
import Post from "./Post";

type PostsProps = {};

const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
