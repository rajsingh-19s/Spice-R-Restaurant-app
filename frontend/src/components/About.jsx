import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             "The only thing we're serious about is food." This isn’t just a tagline — it’s our philosophy. Every dish we serve is crafted with care, passion, and the freshest ingredients, because to us, food is more than just a meal — it’s an experience. While trends may come and go, our commitment to flavor, authenticity, and quality never wavers. Whether it’s a spicy street-style snack or a rich, slow-cooked curry, we pour our heart into every bite. We're not here to play games — we’re here to serve unforgettable flavors that speak for themselves. At our place, food is sacred.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
