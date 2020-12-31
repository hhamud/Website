import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css.map'
import heroimage from "../../assets/img/hero-img.png";






class Main extends React.Component {

    componentDidMount() {
        AOS.init();
      }

    render() {
        return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">Hamza Hamud</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">Software Developer</h2>
                    </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src={heroimage}  className="img-fluid animated" alt=""></img>
                        </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Main