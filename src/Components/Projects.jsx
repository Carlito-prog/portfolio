import React from "react";
import Node from "../images/Node.png";
import Demo from "../images/React-Demo.png";

const Projects = () => {
  return (
    <section className="proj-ctn py-3">
      <div className="title-wrp py-4">
        <h1>
          <u>Projects & Code Written</u>
        </h1>
      </div>
      <section className="proj-cont row">
        <div className="col-sm-4">
          <div className="d-flex justify-content-center">
            <a
              href="https://goofy-hugle-6bc1d2.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="lnk-img-wrp">
                <img width="270" height="270" src={Demo} alt="" />
              </div>
              <div className="lnk-txt-wrp py-3">
                <h3> Demo React Site </h3>
              </div>
            </a>
          </div>
          <div className="desc-cont container">
            <div>
              <h4> Description: </h4>
            </div>
            <div>
              <p>
                This website is currently being developed with React.js using
                functional components and React Hooks such as, Browser Router,
                UseContext and State.
              </p>
            </div>
          </div>
        </div>
        <div className="proj-wrp col-sm-4">
          <div className="d-flex justify-content-center">
            <a
              href="https://inspiring-davinci-f75f9e.netlify.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <image
                width="270"
                height="270"
                //src={Crypto}
                alt="vue-project-photo"
              />
              <div className="lnk-txt-wrp py-3">
                <h3> Vue Crypto World </h3>
              </div>
            </a>
          </div>
          <div className="desc-cont">
            <div className="desc-wrp">
              <div>
                <h4> Description: </h4>
              </div>
              <div></div>
              <p>
                This is a personal project displaying my interest in crypto and
                trading. This web app is still under-construction. Node.JS and
                Mongo DB for user authentication will be used on the backend.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column col-sm-4">
          <div className=" d-flex justify-content-center">
            <a
              href="https://github.com/Carlito-prog/petsPractrice"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img width="270" height="270" src={Node} alt="" />
              <div className="lnk-txt-wrp py-3">
                <h3> Node.js Demo </h3>
              </div>
            </a>
          </div>
          <div className="desc-wrp">
            <div>
              <h4> Description: </h4>
            </div>
            <div>
              <p>
                This is a Node.JS project showcasing the use of Express,
                MongoDB, JWT, and MVC architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
