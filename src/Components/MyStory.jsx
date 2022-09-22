import React from "react";
import ReactPlayer from "react-player";

const MyStory = ({ url }) => {
  return (
    <section className="pb-5">
      <div>
        <ReactPlayer
          className="react-player"
          url={url}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

export default MyStory;
