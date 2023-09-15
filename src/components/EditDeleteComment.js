import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UidContext } from "./AppContext";
import { editComment, deleteComment } from "../actions/postActions";
function EditDeleteComment({ comment, postId }) {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [commentText, setCommentText] = useState("");
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    if (commentText) {
      dispatch(editComment(postId, comment._id, commentText));
      setCommentText("");
      setIsEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(postId, comment._id));
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [uid, comment.commenterId]);
  return (
    <div className="container">
      {isAuthor && isEdit === false && (
        <span onClick={() => setIsEdit(!isEdit)} className="mr-2">
          <FontAwesomeIcon icon={faEdit} />
          Editer
        </span>
      )}

      {isAuthor && (
        <span
          onClick={() => {
            if (
              window.confirm("Voulez-vous vraiment supprimer ce commentaire ?")
            ) {
              handleDelete();
            }
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      )}

      {isAuthor && isEdit && (
        <form action="" className=" mb-4 mt-4 " onSubmit={handleEdit}>
          <label htmlFor="text" className="" onClick={() => setIsEdit(!isEdit)}>
            Editer
          </label>
          <input
            className="text-black px-4 py-2 border border-black focus:outline-none focus:border-cyan-600 transition duration-300 rounded"
            type="text"
            defaultValue={comment.comment}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <input
            className="text-black px-4 py-2 border border-black focus:outline-none focus:border-cyan-600 transition duration-300 rounded"
            type="submit"
          />
        </form>
      )}
    </div>
  );
}
export default EditDeleteComment;
