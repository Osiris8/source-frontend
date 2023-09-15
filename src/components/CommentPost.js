import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import formatDateToReadableDate from "../utils/utils";
import { addComment } from "../actions/postActions";
import { getAllPosts } from "../actions/postActions";
import EditDeleteComment from "./EditDeleteComment";

function CommentPost({ post }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const usersProfiles = useSelector((state) => state.users.allUsers);
  const userProfile = useSelector((state) => state.user.userProfile);
  //const posts = useSelector((state) => state.posts.allPosts);

  const handleComment = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(
        addComment(post._id, userProfile._id, userProfile.firstname, comment)
      )
        .then((res) => {
          dispatch(getAllPosts());
        })
        .then(() => {
          setComment("");
        });
    }
  };

  return (
    <div>
      {post.comments.map((comment) => {
        const commenter = usersProfiles.find(
          (user) => user._id === comment.commenterId
        );

        return (
          <div
            key={comment._id}
            className={
              comment.commenterId === userProfile._id
                ? "text-cyan-600"
                : "text-gray-600"
            }
          >
            <div className="flex items-center justify-between mb-4 mt-4">
              <img
                src={commenter.image.replace("/frontend/public", "")}
                alt={commenter.firstname}
                className="w-12 h-12 rounded-full mr-2"
              />
              <h2 className="font-semibold">
                {commenter.firstname} {commenter.lastname}
              </h2>

              <p className="text-gray-600 ml-2">
                {formatDateToReadableDate(comment.time)}
              </p>
            </div>
            <p className="ml-8 mb-2">{comment.comment}</p>
            <EditDeleteComment comment={comment} postId={post._id} />
            <hr className="mb-4 border border-gray-400" />
          </div>
        );
      })}
      {userProfile._id && (
        <div>
          <form action="#" className="" onSubmit={handleComment}>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Ajouter un commentaire"
              className="w-full px-4 py-2 border border-black focus:outline-none focus:border-cyan-600 transition duration-300 rounded"
            />
            <button
              type="submit"
              className="bg-cyan-600 text-white px-4 py-2 mt-2 rounded hover:bg-cyan-700 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CommentPost;
