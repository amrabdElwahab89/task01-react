import React from "react";
import img00 from "../../assets/images/Rectangle 262.png";
import img01 from "../../assets/images/Vector 8.png";
import img02 from "../../assets/images/Rectangle 263.png";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="container aboutUs-container position-relative ">
        {/* aboutUS - Background */}
        <div
          className="aboutUs-background01 position-absolute"
          style={{
            backgroundImage: `url(${img00})`,
          }}
        ></div>

        <div
          className="aboutUs-background02 position-absolute"
          style={{
            backgroundImage: `url(${img01})`,
          }}
        ></div>

        {/* aboutUs - Content */}
        <div className="aboutUs-content  position-absolute row d-flex justify-content-evenly">
          {" "}
          {/*------- Left Section */}
          <div className="aboutUs-content-leftSection  col-md-5">
            {" "}
            <ul className=" list-unstyled ">
              <li>
                {" "}
                <span className="aboutUs-heading">About Us</span>
              </li>
              <li>
                {" "}
                <span className="aboutUs-description">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  illo dolorem temporibus in, consequuntur libero ratione totam
                  maiores soluta, laborum accusamus minus nihil eum sunt.
                </span>
              </li>
              <li className="mt-4">
                <img src={img02} alt="" />
              </li>
            </ul>
          </div>
          {/* -------Right Section
           */}
          <div className="aboutUs-content-rightSection col-md-4">
            <ul className="list-unstyled  ">
              <li>
                <span className="aboutUs-heading ">Where</span>
              </li>
              <li>
                {" "}
                <span className="aboutUs-description">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum vero, fugiat iusto maiores dolor inventore tempora
                  reprehenderit quod aperiam amet assumenda dolorem atque
                  repellat perspiciatis quae enim soluta a eaque maxime harum
                  deserunt eum? Id cumque culpa doloremque ipsum ex rerum, rem
                  obcaecati voluptatum eligendi qui inventore officia, itaque
                  cupiditate reprehenderit officiis sequi repellat deserunt hic
                  iusto. Adipisci dolor odio beatae fugiat quod temporibus
                  suscipit voluptas, mollitia, illum reprehenderit, accusantium
                </span>
              </li>
            </ul>
          </div>
        </div>

        <button className="helpMe-button position-absolute">
          <span>Help Me</span>
        </button>
      </div>
    </>
  );
}
