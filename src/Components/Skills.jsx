import React from "react";

const Skills = () => {
  return (
    <section className="skills-cont py-5">
      <div className="title-txt-wrp">
        <h1 className="title-txt">
          <u>My Technical Skills</u>
        </h1>
      </div>
      <section className="list-skills-wrp py-4 d-flex justify-content-evenly">
        <div className="py-2">
          <ul className="list-skills col">
            <li>JavaScript Specialist</li>
            <li>Vue</li>
            <li>CSS/SASS/Bootstrap</li>
            <li>Rest API</li>
            <li>TypeScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <ul className="list-skills col">
            <li>React</li>
            <li>Salesforce DB</li>
            <li>Razor</li>
            <li>Linux/Windows Environment</li>
            <li>AWS-EC2/Lambda</li>
            <li>FireBase</li>
          </ul>
        </div>
        <div>
          <ul className="list-skills col">
            <li>Node/Express</li>
            <li>Material Ui</li>
            <li>Redux/Vuex</li>
            <li>Mongo DB</li>
            <li>.NET</li>
            <li>C#</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Skills;
