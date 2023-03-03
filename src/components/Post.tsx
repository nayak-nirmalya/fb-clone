import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { Post } from "../../public/features/postSlice";

type PostProps = {
  post: Post;
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            width={40}
            height={40}
            src={
              post.profilePic
                ? post.profilePic
                : "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
            }
            alt="PostImage"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-sm text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4">{post.post}</p>
      </div>
      {/* Check for Image */}

      {post.image && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image
            src={post.image}
            alt="PostPicture"
            priority
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-200 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp size={24} className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-200 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt size={24} className="h-4" />
          <p className="text-sm sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-200 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine size={24} className="h-4" />
          <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};
export default Post;
