import React from "react";
import { Link } from "react-router-dom";

class BlogDetail extends React.Component {
  render() {
    return (
      <div>
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>{this.props.post.title}</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>{this.props.post.title}</li>
              </ol>
            </div>
          </div>
        </section>
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row justify-content-center">
              <h1 className="portfolio-title">{this.props.post.title}</h1>
              <div className="col-lg-12 offset-md-3">
                <img
                  src={this.props.post.thumbnail}
                  className="img-fluid"
                  alt=""
                ></img>
              </div>
              <div
                className="col-lg-12 portfolio-info"
                dangerouslySetInnerHTML={{ __html: this.props.post.content }}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogDetail;
