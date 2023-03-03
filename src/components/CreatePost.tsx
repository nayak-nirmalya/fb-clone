import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../public/features/postSlice";

type CreatePostProps = {};

const FB_CLONE_ENDPOINT = process.env.FB_CLONE_ENDPOINT!;

const CreatePost: React.FC<CreatePostProps> = () => {
  const { data: session } = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [imageToPost, setImageToPost] = useState<string>("");
  const dispatch = useDispatch();

  const handleClick = () => {
    hiddenFileInput.current!.click();
  };

  const addImageToPost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target.files![0]) {
      reader.readAsDataURL(event.target.files![0]);
      reader.onload = (event) => {
        setImageToPost(event.target?.result as string);
      };
    }
  };

  const removeImage = () => setImageToPost("");

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!inputRef.current?.value) return;
    const formData = new FormData();
    formData.append("image", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session!.user!.name!);
    formData.append("email", session!.user!.email!);
    formData.append("profilePic", session!.user!.image!);

    axios
      .post(FB_CLONE_ENDPOINT, formData, {
        headers: { Accept: "application/json" }
      })
      .then((response) => {
        inputRef.current!.value = "";
        dispatch(addPost(response.data));
        removeImage();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 items-center space-x-2">
        <Image
          src={session?.user?.image!}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          alt="Facebook Symbol, Facebook Logos Within A White Square"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-200 px-4"
            type="text"
            ref={inputRef}
            placeholder={`What's on Your Mind, ${session?.user?.name}?`}
          ></input>
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>
      {imageToPost && (
        <div className="flex items-center px-4 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line
            onClick={removeImage}
            className="h-8 hover:text-red-600"
            title="Remove Selected Photo!"
          />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-200 rounded-md cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-200 rounded-md cursor-pointer"
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            onChange={addImageToPost}
            type="file"
            hidden
            accept="image/*"
            ref={hiddenFileInput}
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-200 rounded-md cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
