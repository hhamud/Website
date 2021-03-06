import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../../assets/favicon_io/android-chrome-512x512.png";

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <Link to="/"><img src={Logo} alt=''></img></Link>
            </h1>
          </div>
          <Navbar posts={this.props} />
        </div>
      </header>
    );
  }
}

export default Header;
