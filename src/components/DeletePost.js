import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/postActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function DeletePost(props) {
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    if (props._id) {
      // Vérifiez si _id est défini
      dispatch(deletePost(props._id));
    }
  };

  return (
    <button
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this post?")) {
          handleDeletePost();
        }
      }}
      className="text-red-500 hover:text-red-700"
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

export default DeletePost;
