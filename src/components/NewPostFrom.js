import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import formatDateToReadableDate from "../utils/utils";
import { addPost, getAllPosts } from "../actions/postActions";

function NewPostFrom() {
  const [loadPost, setLoadPost] = useState(true);
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);
  const dispatch = useDispatch();
  const usersProfile = useSelector((state) => state.user.userProfile);
  const userProfile = useSelector((state) => state.user.userProfile);

  const handleVideoChange = () => {
    let findLink = message.split(" ");
    for (let i = 0; i < findLink.length; i++) {
      if (
        findLink[i].includes("https://www.yout") ||
        findLink[i].includes("https://yout")
      ) {
        let embed = findLink[i].replace("watch?v=", "embed/");
        setVideo(embed.split("&")[0]);
        findLink.splice(i, 1);
        setMessage(findLink.join(" "));
        setPostPicture("");
      }
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("posterId", "userProfile._id");
    console.log(data);
    /*data.append("message", message);
      if (file) data.append("file", file);
      data.append("video", video);

      dispatch(addPost(data));
      dispatch(getAllPosts());
      cancelPost();*/
  };

  const cancelPost = () => {
    setMessage("");
    setPostPicture("");
    setVideo("");
    setFile("");
  };

  useEffect(() => {
    if (usersProfile) {
      setLoadPost(false);
      handleVideoChange();
    }
  }, [usersProfile, message, video]);

  return (
    <div className="container">
      {loadPost ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="flex justify-center items-center">
            <form
              className="bg-white p-4 rounded-lg shadow-md w-96 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="resize-none border rounded-lg py-2 px-3 w-full"
                  id="message"
                  placeholder="Saisissez votre message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {!video && (
                <div className="mb-4 flex justify-between items-center">
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="image"
                  >
                    Publier une image
                  </label>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    id="image"
                    className="hidden"
                    name="file"
                    onChange={(e) => handlePicture(e)}
                  />
                  <label htmlFor="image" className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 hover:text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </label>
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="m-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                >
                  Envoyer
                </button>
                {message || postPicture || video ? (
                  <button
                    onClick={cancelPost}
                    type="submit"
                    className="m-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Annuler
                  </button>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-4">
            {message || postPicture || video ? (
              <div className="p-4  rounded-lg shadow-md">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    <img
                      src={userProfile.image.replace("/frontend/public", "")}
                      alt={userProfile.firstname}
                      className="w-12 h-12 rounded-full mr-2"
                    />
                    <h2 className="font-semibold">
                      {userProfile.firstname} {userProfile.lastname}
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    {formatDateToReadableDate(Date.now())}
                  </p>
                </div>
                <div className="">
                  <p className="text-gray-600 mt-2">{message}</p>
                  {postPicture && (
                    <img
                      src={postPicture}
                      alt=""
                      className="w-96 h-96 rounded-lg shadow-md bg-gray-100 "
                    />
                  )}
                  {video && (
                    <iframe
                      width="560"
                      height="315"
                      src={video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPostFrom;
