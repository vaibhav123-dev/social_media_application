import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPosts, getPost, updatePosts } from "../Redux/action/actions";

export const Form = ({ setID, id }) => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts);
  const [post, setPost] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (id) {
      posts.map((post) => {
        if (post._id === id) {
          return setPost(post);
        }
      });
    }
  }, [id]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePosts(id, post));
    } else {
      dispatch(createPosts(post));
    }
  };

  const clearForm = () => {
    setPost({
      title: "",
      message: "",
      tags: "",
      creator: "",
      selectedFile: "",
    });
  };
  return (
    <>
      <div>
        <Search />
        <div className="shadow-md rounded px-4 pt-6 pb-8 mb-4 min-w-min md:content-center ">
          <h3 className="text-center mb-2">Create a Memory</h3>
          <form className="bg-white text-sm " onSubmit={handleSubmit}>
            <div>
              <input
                value={post.creator}
                placeholder="Creator..."
                className="m-2 p-2 border px-12"
                type="text"
                onChange={(event) =>
                  setPost({ ...post, creator: event.target.value })
                }
              />
            </div>
            <div>
              <input
                value={post.title}
                placeholder="Title..."
                className="m-2 p-2 border px-12"
                type="text"
                onChange={(event) =>
                  setPost({ ...post, title: event.target.value })
                }
              />
            </div>
            <div>
              <input
                value={post.message}
                placeholder="Message..."
                className="ml-2 p-2 border px-12 "
                type="text"
                onChange={(event) =>
                  setPost({ ...post, message: event.target.value })
                }
              />
            </div>
            <div>
              <input
                value={post.tags}
                placeholder="Tags..."
                className=" border m-2 p-2 px-12"
                type="text"
                onChange={(event) =>
                  setPost({ ...post, tags: event.target.value })
                }
              />
            </div>
            <div className="p-2 ">
              {/* <input
                className="p-2 "
                type="file"
                onChange={(event) =>
                  setPost({ ...post, selectedFile: event.target.files[0] })
                }
              /> */}
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPost({ ...post, selectedFile: base64 })
                }
              />
            </div>
            <div className="flex flex-col">
              <button className="bg-red-500 m-1 p-1.5">Submit</button>
            </div>
          </form>
          <button className="bg-blue-400 m-1 p-1.5 w-72" onClick={clearForm}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
