/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.css";
import "boxicons/css/animations.css";
import "boxicons/css/boxicons.min.css";
import "boxicons/css/transformations.css";

class About extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Me</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <section id="services" className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Front End</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Back End</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Other</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default About;
