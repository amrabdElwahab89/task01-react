import React, { useState } from "react";
import InputSample from "./InputSample";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";

export default function ContactUs() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const [loadingdData, setloadingdData] = useState(false);

  async function submitData(values) {
    setloadingdData(true);
    try {
      const { data } = await axios.post(
        "http://upskilling-egypt.com:3000/contact",
        values
      );
      console.log(data);
      if (data.message === "success") {
        setloadingdData(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  let formik = useFormik({
    // de el tagme3a
    // form Values
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // validation
    validationSchema,
    // on submit Function
    onSubmit: submitData,
  });

  return (
    <>
      <div className="m-auto text-center contactUs-container">
        <div className="Pasedooo">
          <span>Contact Us</span>
          <div className="line top-left"></div>
          <div className="line bottom-left"></div>
          <div className="line top-right"></div>
          <div className="line bottom-right"></div>
        </div>

        <div className="d-flex justify-content-center">
          {/*--------- Left Section */}
          <div className="">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <div>
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Name"
                    className=" my-3 form-control contactUs-input"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="alert alert-danger">
                      {" "}
                      {formik.errors.email}{" "}
                    </div>
                  ) : null}

                  {/* Email */}
                  <input
                    type="text"
                    placeholder="Email"
                    className=" my-3 form-control contactUs-input"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="alert alert-danger">
                      {" "}
                      {formik.errors.email}{" "}
                    </div>
                  ) : null}

                  {/* Phone */}
                  <input
                    type="text"
                    placeholder="Password"
                    className="my-3 form-control contactUs-input"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="alert alert-danger">
                      {" "}
                      {formik.errors.password}{" "}
                    </div>
                  ) : null}

                  {loadingdData ? (
                    <div>
                      {" "}
                      <button
                        className=" my-3 btn btn-outline-danger w-100 text-center"
                        type="button"
                      >
                        <i className="fas fa-spinner fa-spin"></i>
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      {" "}
                      <button className=" send-button" type="submit">
                        Send{" "}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* ---------Right Section */}
          <div className="d-flex flex-column algin-content-between mt-5 mx-5  ">
            <div>
              <i className="fa-solid fa-envelope m-4"></i>{" "}
              <span>upskillig.eg1@gmail.com</span>
            </div>
            <div>
              <i className="fa-solid fa-phone m-4"></i>{" "}
              <span className="me-5">+0201154932137</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
