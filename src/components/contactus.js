import React, { Fragment } from "react";
import Logo from "../imgs/img1.png";
import Logo1 from "../imgs/img2.jpg";
import Logo2 from "../imgs/img3.jpg";

class Contactus extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center", background: "white" }}>
          <h1>Contact Us</h1>
          <hr />
          <br />
          <img
            src={Logo}
            alt="website logo"
            width="50"
            height="39"
            hspace="10"
            onClick={this.img1click}
          />
          <img
            src={Logo1}
            alt="website logo"
            width="40"
            height="39"
            hspace="10"
            onClick={this.img2click}
          />
          <img
            src={Logo2}
            alt="website logo"
            width="50"
            height="39"
            hspace="10"
            onClick={this.img3click}
          />
        </div>
        <br />
        <div
          style={{ textAlign: "center", height: "30px", background: "grey" }}
        >
          <div style={{ fontSize: "10px" }}>
            EduEazy is optimized for exploring, comparing and selecting a better
            course from the ocean of different courses. Simple searching the
            course and getting the most popular list in all the sites combined.
            While using this site, you agree to have read and accepted our terms
            of use, cookie and privacy policy. Copyright 1999-2020 by _____,
            ______ and _______ sites. All Rights Reserved. Powered by EduEazy.
          </div>
          <br />
        </div>
        <a href="/">
          {/* Logo here */}
          <div style={{ fontSize: "50px" }}>EduEazy</div>
        </a>
      </Fragment>
    );
  }

  img1click = () => {
    window.open("https://mailto:tirthjivani17@gmail.com");
  };

  img2click = () => {
    window.open("https://www.linkedin.com");
  };

  img3click = () => {
    window.open("https://www.twitter.com");
  };
}

export default Contactus;
