import React from "react";
import Node from "../images/Node.png";
import Crypto from "../images/Vue-Crypto.png";
import Demo from "../images/React-Demo.png";

const Projects = () => {
  return (
    <section className="proj-ctn py-3">
      <div className="title-wrp py-4">
        <h1>
          <u>Projects & Code Written</u>
        </h1>
      </div>
      <section className="proj-cont ">
        <div className="proj-wrp d-flex ">
          <div className=" col-4">
            <div className="d-flex justify-content-center">
              <a href="https://goofy-hugle-6bc1d2.netlify.app/" target="_blank">
                {" "}
                <div className="lnk-img-wrp">
                  <img width="270" height="270" src={Demo} alt="" />
                </div>
                <div className="lnk-txt-wrp py-3">
                  <h3> Demo React Site </h3>
                </div>
              </a>
            </div>
            <div className="desc-cont">
              <div className="desc-wrp ">
                <div>
                  <h4> Description: </h4>
                </div>
                <div>
                  <p>
                    This website is developed with react js from scratch
                    pulliung API for characters in a blog style with
                    router-links. Using function components, with react Hooks,
                    like Browser Router, UseContext, State, with additions
                    coming soon using Redux for Home/Profile Components with
                    Back end coming soon for JWT Auth, and pulling data from
                    Mongodb user profile information/stats.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="proj-wrp col-4">
            <div className="d-flex justify-content-center">
              <a
                href="https://inspiring-davinci-f75f9e.netlify.app"
                target="_blank"
              >
                <img width="270" height="270" src={Crypto} alt="" />
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
                  This is a personal project displaying my interest in crypto
                  and trading. This web app is still under-construction with
                  back-end coming soon, with node.js and mongodb, for users
                  Authentification, Mongoose for Services.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column col-4">
            <div className=" d-flex justify-content-center">
              <a href="https://github.com/Carlito-prog/petsPractrice">
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
                  Built Using React Router Dom, and context provider for login
                  and route access. Open Access for visitors just input a 3
                  character Username and Password. Using Redux for Profile
                  Component not finished with back-end take a look at code on
                  Github.Views bulit with React.js and Back-End built with
                  Node.js Express, with MongoDB as data base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
