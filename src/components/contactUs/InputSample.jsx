import React from "react";
import "./ContactUs.css";

export default function InputSample({ type, placeHolder }) {
  return (
    <>
      <input className="mb-3 " type={type} placeholder={placeHolder} />
    </>
  );
}
