import React from "react";
import TestimonialsSample from "./TestimonialsSample";

export default function Testymonial() {
  return (
    <>
      <div className="m-auto text-center ">
        {" "}
        <div className="testymonials-Pasedooo">
          <span>Testymonial</span>
          <div className="testymonials-line top-left"></div>
          <div className="testymonials-line bottom-left"></div>
          <div className="testymonials-line top-right"></div>
          <div className="testymonials-line bottom-right"></div>
        </div>
        <div className="py-2 container ">
          {/* Left Section */}
          <div className="d-flex">
            {" "}
            <TestimonialsSample />
            <TestimonialsSample />
          </div>

          {/* Right Section */}
          <div className="d-flex">
            <TestimonialsSample />
            <TestimonialsSample />
          </div>
        </div>
      </div>
    </>
  );
}
