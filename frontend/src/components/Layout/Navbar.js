/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector("#header").className =
        "fixed-top d-flex align-items-center header-scrolled";
    } else {
      document.querySelector("#header").className =
        "fixed-top d-flex align-items-center";
    }
  };

  render() {
    return (
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li className="drop-down">
            <Link to="/blog/">Blog</Link>
            <ul>
              {this.props.posts.posts.filter((post) => post.catagory ==="blog").map((post, i) => (
                <li key={i}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
