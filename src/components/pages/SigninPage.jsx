import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../redux/features/application";
import Headers from "../Headers";
import CatPage from "./CatPage";

export const SigninPage = () => {
  const dispatch = useDispatch();

  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth(login, password));
  };
  return (
    <div className="main">
      <div>
        <Headers />
      </div>
      <div className="office">
        {error}
        < div className="registr">
          <p className="header_cart">AUTHORIZATION</p>
          <div >
            <input
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            />
          </div>
          <button onClick={handleSubmit} disabled={signingIn}>
            Authorization
          </button>
          <div className="footer_cart"><p className="link">Forgot your password?</p><p ><Link className="link" to="/signup">
              {" "}
              <p>Registration</p>{" "}
            </Link></p></div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
