import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../../public/features/postSlice";
import Post from "./Post";

type PostsProps = {};

const FB_CLONE_ENDPOINT = "http://localhost:8080/api/v1/posts";

const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(FB_CLONE_ENDPOINT);
        dispatch(addAllPost(response.data));
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
