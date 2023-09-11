import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { UidContext } from "../components/AppContext";
import { likePost, unlikePost } from "../actions/postActions";

function LikeButton({ post }) {
  const [likes, setLikes] = useState(post.likers ? post.likers.length : 0);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  const userProfile = useSelector((state) => state.user.userProfile);

  useEffect(() => {
    if (userProfile && post.likers.includes(userProfile._id)) {
      setLiked(true);
    }
  }, [userProfile, post.likers, setLiked]);

  const like = () => {
    if (userProfile) {
      dispatch(likePost(post._id, userProfile._id));
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const unLike = () => {
    if (userProfile) {
      dispatch(unlikePost(post._id, userProfile._id));
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div>
      {uid && (
        <div>
          {liked ? (
            <button onClick={unLike}>
              <FontAwesomeIcon icon={fasHeart} />
            </button>
          ) : (
            <button onClick={like}>
              <FontAwesomeIcon icon={farHeart} />
            </button>
          )}
          <span className="p-2">{post.likers ? post.likers.length : 0}</span>
        </div>
      )}
    </div>
  );
}

export default LikeButton;
