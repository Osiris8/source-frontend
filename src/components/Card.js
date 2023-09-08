import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import formatDateToReadableDate from "../utils/utils";

function Card({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const usersProfiles = useSelector((state) => state.users.allUsers);

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

                  <p className="mt-2">{post.message}</p>
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
