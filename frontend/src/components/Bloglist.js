/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css.map";
import "../assets/icofont/icofont.css";
import { Link } from "react-router-dom";

class BlogList extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section id="more-services" className="more-services">
        <div className="container">
          <div className="row">
            {this.props.posts.filter((post) => post.catagory ==="blog").map((post, i) => (
              <div key={i} className="col-md-6 d-flex align-items-stretch">
                <div
                  className="card"
                  style={{ backgroundImage: 'url("' + post.thumbnail + '")' }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="card-body">
                    <h5 className="card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <p className="card-text">{post.excerpt}</p>
                    <div className="read-more">
                      <Link to={`/blog/${post.slug}`}>
                        <i className="icofont-arrow-right"></i> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BlogList;
