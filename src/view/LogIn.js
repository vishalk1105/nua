import React, { useState } from "react";
import ReactInput from "../app/components/ReactInput";
import ReactButton from "../app/components/ReactButton";
import { useNavigate } from "react-router-dom";
import { userLogInData } from "../config/config";
const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [invalidFieldErrorMsg, setInvalidFieldErrorError] = useState(false);
  const [emptyFieldErrorMsg, setEmptyFieldErrorMsg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const loginId = userLogInData.userName;
  const loginPass = userLogInData.password;
  const onSubmit = async () => {
    if (userName === loginId && password === loginPass) {
      localStorage.setItem("token", "loginToken");
      setPassWord("");
      setUserName("");
      navigate("/");
    } else {
      setInvalidFieldErrorError(true);
    }
    if (userName.length === 0 || password.length === 0) {
      setEmptyFieldErrorMsg(true);
    }
  };
  const onIconClick = () => {
    setShowPassword(!showPassword);
  };

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
    setShowPassword(false);
    setEmptyFieldErrorMsg(false);
    setInvalidFieldErrorError(false);
  };
  const onPasswordChange = (e) => {
    setPassWord(e.target.value);
    setShowPassword(false);
    setEmptyFieldErrorMsg(false);
    setInvalidFieldErrorError(false);
  };
  return (
    <div className="logInLayoutDiv">
      <div className="loginFormDiv rounded shadow bg-body-tertiary p-4">
        <div className="loginHeader d-flex flex-column align-items-center my-3">
          <img
            src={
              "https://cdn.nuawoman.com/global/img/header/NuaLogo2021-TM.png"
            }
            alt=""
            className="logo my-1"
          />
        </div>
        <div className="">
          <ReactInput
            label="Username"
            placeholder="Enter Username"
            onChange={onChangeUsername}
            value={userName}
            type="text"
            error={
              emptyFieldErrorMsg
                ? "Both Fields can not be Empty"
                : invalidFieldErrorMsg
                ? "Invalid Credentials"
                : ""
            }
          />

          <ReactInput
            reactInputClassName="passwordInput mb-4"
            label="Password"
            placeholder="Enter Password"
            inputClassName={"pswdInput"}
            onChange={onPasswordChange}
            value={password}
            type={showPassword ? "password" : "text"}
            error={
              emptyFieldErrorMsg
                ? "Both Fields can not be Empty"
                : invalidFieldErrorMsg
                ? "Invalid Credentials"
                : ""
            }
            icon={true}
            iconClassName={
              showPassword
                ? "bi bi-eye-slash-fill passwordIcon"
                : "bi bi-eye-fill passwordIcon"
            }
            onIconClick={onIconClick}
          />
          <ReactButton
            btnType="submit"
            btnClass="logInBtn text-center w-100"
            onClickfn={onSubmit}
            btnText="Log In"
            reactBtnOuterDiv="mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
