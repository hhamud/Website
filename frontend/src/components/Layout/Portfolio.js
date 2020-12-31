// eslint-disable-next-line

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "venobox/venobox/venobox.css";

class Portfolio extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Here are the projects that I have completed</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {this.props.posts
              .filter((post) => post.catagory === "portfolio")
              .map((post, i) => (
                <div className="rounded card__hover-area" key={i}>
                  <div className="portfolio-card">
                    <div
                      className="card__front"
                      style={{
                        backgroundImage: 'url("' + post.thumbnail + '")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="card__back">
                      <h4>{post.title}</h4>
                      <p>{post.excerpt}</p>
                      <div className="d-flex">
                        {post.github_link ? (
                          <a href={post.github_link} class="btn-github">
                            Code
                          </a>
                        ) : (
                          ""
                        )}
                        {post.demo_link ? (
                          <a href={post.demo_link} class="btn-live-demo">
                            Demo
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
