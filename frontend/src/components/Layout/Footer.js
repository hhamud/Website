import React from "react";
import "../../assets/icofont/icofont.css";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="social-links">
                <a href="https://www.github.com/hhamud" className="github">
                  <i className="icofont-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/hamzahamud" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" className="scrollto">
                  Home
                </a>
                <a href="#about" className="scrollto">
                  About
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
