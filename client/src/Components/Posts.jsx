import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePosts } from "../Redux/action/actions";

export const Posts = ({ post, setID }) => {
  // const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  // console.log(refresh);
  // const handleDelete = (id) => {
  //   console.log(id);
  //   setRefresh(!refresh);
  // };
  // useEffect(() => {
  //   setRefresh(true);
  // }, [refresh]);

  return !post.length ? (
    <div className="mt-20 w-4/5">loading...</div>
  ) : (
    <div className="font-serif mt-20 w-4/5 h-auto grid grid-cols-4 md:grid-cols-1 lg:grid-cols-2 md:ml-24 xl:grid-cols-3">
      {post.map((post) => {
        return (
          <div
            key={post._id}
            className="bg-gray-500 h-80  md:min-w-min border-2 m-2 relative rounded-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                className="min-w-full h-36"
                src={post.selectedFile}
                alt="img"
              />
              <div className="absolute py-2.5 top-1 left-3 inset-x-0 text-black text-2xl leading-4 font-serif">
                <div className="flex justify-between">
                  <h1> {post.creator}</h1>
                  <div
                    className="editIcon mr-2"
                    onClick={() => {
                      setID(post._id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm ml-1">
                  {moment(post.createdAt).fromNow()}
                </div>
              </div>
            </div>
            <div className="tag ml-2 mt-2">
              {post.tags.map((tag) => {
                return <div>{tag}</div>;
              })}
            </div>
            <div className="title ">
              <h1 className="text-2xl ml-2">{post.title}</h1>
            </div>
            <div className="message">
              <p className="text-sm m-2">{post.message}</p>
            </div>
            <div className="button absolute bottom-0 ">
              <div className="flex">
                <button className="flex ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="h-6 w-6 mt-1">0</div>
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none  font-medium rounded-lg text-sm px-6 py-1.5 text-center mr-3 mb-2 ml-32"
                  onClick={() => {
                    dispatch(deletePosts(post._id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
