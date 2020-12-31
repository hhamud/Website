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

          <div className="row content justify-content-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                Hi and welcome to my website. I created this website
                for the purpose of being able to showcase what I am capable of and to be able to 
                also jot down a few of my thoughts online. 
              </p>
            </div>
            
          </div>
        </div>

        <section id="services" className="services">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bx bx-desktop"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Front End</a>
                  </h4>
                  <p className="description">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Javascript</li>
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
                    <i className="bx bx-data"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Back End</a>
                  </h4>
                  <p className="description">
                    <li>Django</li>
                    <li>Python</li>
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
                    <i className="bx bx-comment-detail"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Other</a>
                  </h4>
                  <p className="description">
                    <li>Git</li>
                    <li>Bash</li>
                    <li>MySQL</li>
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
