import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/action/actions";
import { Post } from "./Post";

export const Home = () => {
  const [id, setID] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Post setID={setID} id={id} />
    </div>
  );
};
