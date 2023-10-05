import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../actions/postActions";
import NewPostFrom from "./NewPostFrom";
import Navbar from "./Navbar";
import Card from "./Card";
function Home() {
  const dispatch = useDispatch();
  const [loadPost, setLoadPost] = useState(true);
  const posts = useSelector((state) => state.posts.allPosts);

  useEffect(() => {
    if (loadPost) {
      dispatch(getAllPosts());
      setLoadPost(false);
    }
  }, [dispatch, loadPost]);

  return (
    <div>
      <Navbar />
      <div>
        <NewPostFrom />
        {posts.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
