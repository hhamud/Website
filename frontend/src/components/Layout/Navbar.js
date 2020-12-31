/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.jquerynavbar();
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

  jquerynavbar = () => {
    if ($(".nav-menu").length) {
      var $mobile_nav = $(".nav-menu").clone().prop({
        class: "mobile-nav d-lg-none",
      });
      $("body").append($mobile_nav);
      $("body").prepend(
        '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
      );
      $("body").append('<div class="mobile-nav-overly"></div>');

      $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
        $(".mobile-nav-overly").toggle();
      });

      $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass("active");
      });

      $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
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
              {this.props.posts.posts
                .filter((post) => post.catagory === "blog")
                .map((post, i) => (
                  <li key={i}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
