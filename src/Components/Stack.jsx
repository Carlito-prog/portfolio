import React from "react";

const Stack = () => {
  return (
    <section className="py-3">
      <div className="sheader-wrp py-2 d-flex justify-content-center">
        <h1>EXPERIENCED TECHNOLOGY STACKS</h1>
      </div>
      <br />
      <div className="cont-wrp d-flex justify-content-evenly">
        <div className="stk-wrp pr-20 ">
          {/* Specialist */}
          <h3> MERN </h3>
        </div>
        <br />
        <div className="stk-wrp">
          <h3> MEVN </h3>
        </div>
        <br />
        <div className="stk-wrp">
          <h3> .Net </h3>
        </div>
        <br />
        <div className="stk-wrp">
          {/* Specialist */}
          <h3> JAVASCRIPT </h3>
        </div>
      </div>
    </section>
  );
};

export default Stack;
