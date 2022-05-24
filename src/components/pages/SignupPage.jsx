import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../redux/features/application";
import Headers from "../Headers";

export const SignupPage = () => {
  const dispatch = useDispatch();

  const signingUp = useSelector((state) => state.application.signingUp);
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
    dispatch(createUser(login, password));
  };
  return (
    <div className="main">
      <div>
        <Headers />
      </div>
      <div className="office">
        {error}
        <div className="registr">
          <p className="header_cart">REGISTRATION</p>
          <div>
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
          <div>
            <input type="text" placeholder="Повторите пароль" />
          </div>
          <div>
            <input type="text" placeholder="Введите email" />
          </div>
          <div>
            <input type="text" placeholder="Ваш номер телефона" />
          </div>
          <button onClick={handleSubmit} disabled={signingUp}>
            Registration
          </button>
          <div className="footer_cart_reg">
            <p>
              <Link className="link" to="/signin">
                {" "}
                <p>Authorization</p>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
