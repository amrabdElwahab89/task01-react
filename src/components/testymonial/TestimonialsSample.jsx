import React from "react";
import pp from "../../assets/images/pp.png";
import StarSample from "./StarSample";
import "./Testymonial.css";

export default function TestimonialsSample() {
  return (
    <>
      <div className="d-flex  border rounded-5 m-2 py-2 bg-white row">
        {/* Left Section */}
        <div className="col-lg-2">
          <img src={pp} className="w-100  rounded-circle" alt="profile-pic" />
        </div>

        {/* Right Section */}
        <div className="text-start  col-lg-10">
          <ul className="list-unstyled">
            <li>
              <span className="testymonials-heading"> Courtnery Henry</span>
            </li>
            <li>
              <span className="testymonials-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                minima consequatur cumque deserunt! Placeat et officia hic
                deleniti delectus totam, repellat excepturi itaque eveniet,
                neque ea officiis aliquam culpa! Officia. consequatur cumque
                deserunt! Placeat et officia hic deleniti delectus totam,
                repellat excepturi itaque eveniet, neque ea officiis aliquam
                culpa! Officia.
              </span>
            </li>
          </ul>

          <StarSample />
          <StarSample />
          <StarSample />
          <StarSample />
          <StarSample />
        </div>
      </div>
    </>
  );
}
