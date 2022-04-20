import React, { useState, useEffect } from "react";
import "../styles/LikeButton.css";

function LikeButton() {
  const [isLiked, setIdLike] = useState(false);


  const handleClick = () => {
    console.log("was clicked");
    setIdLike(!isLiked);
  };

  useEffect(() => {
    console.log(isLiked);
  }, [isLiked]);

  return (
    <button onClick={handleClick} className="likeButton">
      {isLiked ? (
        <div>
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        </div>
      ) : (
        <div>
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-6.769 8.852-8.346 12-2.944 3.125-5.362 12-3.848 12 2.944 0 .746-.156 1.496-.423 2.253-1.116-.902-2.534-1.445-4.077-1.445-3.584 0-6.5 2.916-6.5 6.5 0 2.063.97 3.901 2.473 5.093z"/></svg>
        </div>
      )}
    </button>
  );
}

export default LikeButton;
