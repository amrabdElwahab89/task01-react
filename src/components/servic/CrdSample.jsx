import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Services.css";

export default function CardSample({ image }) {
  return (
    <>
      <div className="p-2 border rounded-5 col-md-3 gx-1 ">
        <ul className="list-unstyled">
          <li>
            <img className="card-img" src={image} alt="" />
          </li>
          <li className="text-start services-heading">
            {" "}
            <span className="text-start px-2">Lorem, ipsum.</span>
          </li>
          <li className="text-start services-description">
            {" "}
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi
              sed delectus dicta quibusdam laboriosam eos a, ratione debitis
              reprehenderit cupiditate soluta fuga eius. Possimus animi earum
              saepe laborum? Vel.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
