import React from "react";
import img01 from "../../assets/images/services01.png";
import img02 from "../../assets/images/services02.png";
import img03 from "../../assets/images/services03.jpg";
import CardSample from "./CrdSample";

export default function Services() {
  return (
    <>
      <div className="m-auto text-center">
        <div className="service-Pasedooo">
          <span>Services</span>
          <div className="service-line top-left"></div>
          <div className="service-line bottom-left"></div>
          <div className="service-line top-right"></div>
          <div className="service-line bottom-right"></div>
        </div>
        <div>
          <div className=" d-flex row justify-content-md-evenly ">
            <CardSample image={img01} />

            <CardSample image={img02} />

            <CardSample image={img03} />
          </div>

          <button className="service-help-me-button">
            {" "}
            <span>Help me</span>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
