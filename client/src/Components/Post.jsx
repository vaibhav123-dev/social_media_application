import React from "react";
import { Form } from "./Form";
import { Posts } from "./Posts";
import { useSelector } from "react-redux";

export const Post = ({ setID, id }) => {
  const postdata = useSelector((state) => state.posts);
  // console.log(postdata);
  return (
    <div className="flex md:flex-col-reverse">
      <Posts post={postdata} setID={setID} id={id} />
      <Form setID={setID} id={id} />
    </div>
  );
};
//
