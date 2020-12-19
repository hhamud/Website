import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright"></div>
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
