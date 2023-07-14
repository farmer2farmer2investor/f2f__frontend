import React, { useState } from "react";

import { register, logIn } from '../../actions/AuthAction.js';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
// styles
import classes from './Auth.module.css';

const Auth = () => {
  const initialState = {
    name: "",
    password: "",
    cultivation: "",
    about: "",
    profilePicture: "",
    landmark: "",
    district: "",
    state: "",
    postalCode: "",
    confirmPass: ""
  };

  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setRegister] = useState(false);

  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  // Reset form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // uploading the image
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setData({ ...data, [e.target.name]: base64 })
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isRegister) {
      data.password === data.confirmPass ? dispatch(register(data, navigate)) : setConfirmPass(false);
    } else {
      if (data.password !== data.confirmPass) {
        setConfirmPass(false);
      } else {
        dispatch(logIn(data, navigate));
      }
    }
  }

  return (
    <div className={classes.authContainer}>
      <div className={classes.leftContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.rightContainer}>
        <h1 className={classes.authHeading}>
          {isRegister ? "Register as an Farmer" : "Login to your Account"}
        </h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="name"
            className={classes.infoInput}
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          {isRegister && (
            <div className={classes.registerContainer}>
              <input
                required
                type="text"
                placeholder="Cutivation type"
                className={classes.infoInput}
                name="cultivation"
                value={data.cultivation}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="about"
                className={classes.infoInput}
                name="about"
                value={data.about}
                onChange={handleChange}
              />
              <input
                required
                type="file"
                placeholder="profile picture"
                className={classes.infoInput}
                name="profilePicture"
                onChange={handleFileUpload}
              />
              <input
                required
                type="text"
                placeholder="landmark"
                className={classes.infoInput}
                name="landmark"
                value={data.landmark}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="district"
                className={classes.infoInput}
                name="district"
                value={data.district}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="state"
                className={classes.infoInput}
                name="state"
                value={data.state}
                onChange={handleChange}
              />
              <input
                required
                type="number"
                placeholder="postal code"
                className={classes.infoInput}
                name="postalCode"
                value={data.postalCode}
                onChange={handleChange}
              />
            </div>
          )}
          <div className={classes.passwordContainer}>
            <input
              required
              type="password"
              placeholder="password"
              className={classes.infoInput}
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <input
              required
              type="password"
              placeholder="confirm password"
              className={classes.infoInput}
              name="confirmPass"
              value={data.confirmPass}
              onChange={handleChange}
            />
          </div>
          <div className={classes.submitContainer}>
            <span
              style={{
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-end",
                marginRight: "5px",
                display: confirmPass ? "none" : "block",
              }}
            >
              *Confirm password is not same
            </span>
            <span style={{
              fontSize: "1rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
              onClick={() => {
                resetForm();
                setRegister((prev) => !prev)
              }}>
              {isRegister ? "Already have an account Login" : "Don't have an account Sign up"}
            </span>
            <button
              className={classes.btn}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isRegister ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
};