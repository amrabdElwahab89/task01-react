import React from "react";
import coverPic from "../../assets/images/Vector 7.png";
import coverPic02 from "../../assets/images/Group 560.svg";
import "./cover.css";

export default function Cover() {
  return (
    <div className="cover-container position-relative container">
      {/* Cover Background */}
      <div
        className="cover-background position-absolute"
        style={{
          backgroundImage: `url(${coverPic})`,
        }}
      ></div>

      {/* Cover Content*/}
      <div className="cover-content position-absolute w-100 h-100 d-flex flex-column align-items-end justify-content-end">
        {/* Logo */}
        <div className="cover-image ">
          <img src={coverPic02} alt="Logo" />
        </div>

        <ul className="cover-text list-unstyled text-center">
          <li>
            <button className="experts-button">
              <span>Experts</span>
            </button>
          </li>
          <li className="cover-heading">
            <span>Lorem</span>
          </li>
          <li className="cover-subheading">
            <span>Lorem Lorem</span>
          </li>
          <li className="cover-description">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              minus aliquid nostrum velit consequatur reprehenderit ipsam
              magnam, magni et hic provident sunt.
            </span>
          </li>
          <li>
            <button className="help-me-button">
              <span>Help Me</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
