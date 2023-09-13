import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import formatDateToReadableDate from "../utils/utils";
import LikeButton from "./LikeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { updatePost } from "../actions/postActions";
import DeletePost from "./DeletePost";

function Card({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [textUpdate, setTextUpdate] = useState("");
  const usersProfiles = useSelector((state) => state.users.allUsers);
  const userProfile = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();
  const updateMessage = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
      setIsUpdate(false);
    }
  };

  useEffect(() => {
    if (post) {
      setIsLoading(false);
    }
  }, [post]);

  return (
    <div className="w-1/3 p-4 w-full md:w-2/3 p-4 order-1 md:order-2">
      <div className="bg-white p-4 border rounded-lg shadow-md mb-4">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          usersProfiles.map((user) => {
            if (user._id === post.posterId) {
              return (
                <div key={post._id}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={user.image.replace("/frontend/public", "")}
                        alt={user.firstname}
                        className="w-12 h-12 rounded-full mr-2"
                      />
                      <h2 className="font-semibold">
                        {user.firstname} {user.lastname}
                      </h2>
                    </div>
                    <p className="text-gray-600">
                      {formatDateToReadableDate(post.createdAt)}
                    </p>
                  </div>

                  {!isUpdate && <p className="mt-2">{post.message}</p>}
                  {isUpdate && (
                    <div className="flex flex-col ">
                      <textarea
                        className="mt-2 rounded-lg w-full"
                        rows="5"
                        cols="33"
                        onChange={(e) => setTextUpdate(e.target.value)}
                        default={post.message}
                        autoFocus
                      >
                        {post.message}
                      </textarea>
                      <button
                        onClick={updateMessage}
                        className="self-end mt-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Valider les changements
                      </button>
                    </div>
                  )}
                  {/* J'aime la magie de redux
                  SI vous débutez avec React, le concept peut être difficile à comprendre au début.
                  Mais tenez-bon, c'est un outil génial ! */}
                  <div className="flex justify-between">
                    <LikeButton post={post} />
                    {userProfile && post.posterId === userProfile._id && (
                      <div>
                        <button
                          onClick={() => setIsUpdate(!isUpdate)}
                          className="mr-2"
                        >
                          <FontAwesomeIcon icon={faEdit} /> Éditer
                        </button>
                        <DeletePost _id={post._id} />
                      </div>
                    )}
                  </div>
                  <div>
                    {post.image && (
                      <img
                        src={post.image.replace("/frontend/public", "")}
                        alt={post._id}
                        className="mt-2 rounded-lg w-full"
                      />
                    )}
                    {post.video && (
                      <iframe
                        className="mt-2 rounded-lg w-full"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        playsInline
                        src={post.video.replace("/frontend/public", "")}
                        frameborder="0"
                      ></iframe>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
}

export default Card;
