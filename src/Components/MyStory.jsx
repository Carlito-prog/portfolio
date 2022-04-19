import React from "react";
import ReactPlayer from "react-player";

const MyStory = ({ url }) => {
  return (
    <section className="story-cont py-5">
      <div className="title-cont">
        <div className="title-wrp d-flex justify-content-center ">
          <h3>
            <u>My Story</u>
          </h3>
        </div>
        <div className="vid-wrp py-4">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={url}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        {/* <div className="btn-wrp d-flex justify-content-center">
          <a
            href="/projects"
            className="btn btn-secondary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            My Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default MyStory;
