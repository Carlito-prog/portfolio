import React, { useState } from "react";
import { db } from "../firebase";

const Footer = () => {
  const [input, setInput] = useState({
    fullname: "",
    compname: "",
    location: "",
    position: "",
    locstate: "",
    availtype: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const { fullname, compname, locstate, position } = input;

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        fullname: fullname,
        compname: compname,
        location: input.location,
        position: position,
        locstate: locstate,
        availtype: input.availtype,
      })
      .then(() => {
        alert("Thanks for your interest!!  \u{1F604} ");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className="frm-cnt ">
      <div className="d-flex justify-content-center py-4">
        <h3>
          <u>Fill Out Form If Interested</u>
        </h3>
      </div>
      <div className="form-wrp container py-3">
        <form className="row">
          <div className="ff-wrp col-sm-6">
            <input
              onChange={handleChange}
              type="text"
              name="fullname"
              placeholder="Enter Name"
            />

            <input
              onChange={handleChange}
              type="text"
              name="compname"
              placeholder="Enter Company"
            />

            <input
              onChange={handleChange}
              type="email"
              name="location"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="sf-wrp col-sm-6">
            <input
              onChange={handleChange}
              type="text"
              name="position"
              placeholder="Enter Position"
            />

            <input
              onChange={handleChange}
              type="text"
              name="locstate"
              placeholder="City/State of Employer"
            />
            <div className="avail-cont py-3">
              <div className="label-wrp">
                <label for="EmploymentType">Availability Needed:</label>
              </div>
              <div className="slt-wrp px-2">
                <select
                  onChange={handleChange}
                  name="availtype"
                  className="availability"
                >
                  <option value="full-time"> Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
              <div className="btn-wrp">
                <button
                  className="btn btn-link"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
