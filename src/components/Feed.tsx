import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* CreatePostBox */}
        <CreatePost />

        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};
export default Feed;
