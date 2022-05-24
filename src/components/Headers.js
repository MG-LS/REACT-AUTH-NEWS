import React, { Component } from "react";
import { Link } from "react-router-dom";

class Headers extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img
            src="https://avatars.mds.yandex.net/get-zen-logos/1520972/pub_5afd873c5f4967a269c24a01_5e540a69718cf95620ff8a54/xxh"
            alt=""
          />
        </div>
        <div></div>
        <div className="form">
          <p><Link className="link" to="/">
              {" "}
              <p>Night City</p>{" "}
            </Link></p>
          <p>
            <Link className="link" to="/signin">
              {" "}
              <p>Personal account</p>{" "}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Headers;
