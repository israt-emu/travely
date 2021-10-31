import React from "react";
import img1 from "../../../images/footer-1.jpg";
import img2 from "../../../images/footer-2.png";
import img3 from "../../../images/footer-3.jpg";
import img4 from "../../../images/footer-4.jpg";
import img5 from "../../../images/footer-5.jpg";
import img6 from "../../../images/footer-6.jpg";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-10">
      <div className="lg:w-4/5 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
          <div>
            <h1 className="text-2xl font-semibold text-blue-200">
              Get In Touch
            </h1>
            <input
              type="email"
              placeholder="Your Email"
              className="bg-blue-100 py-2 px-3 rounded outline-none my-4"
            />
            <br />
            <button className="py-2 px-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-900">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-200">
              Information
            </h1>
            <ul className="text-white mt-3">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-200 mt-4 lg:mt-0">
              <i className="fab fa-instagram mr-2"></i>
              Instagram
            </h1>
            <div className="grid grid-cols-3 gap-1 p-4 bg-blue-100 rounded mt-3">
              <img src={img1} alt="" className="h-full" />
              <img src={img2} alt="" className="h-full" />
              <img src={img3} alt="" className="h-full" />
              <img src={img4} alt="" className="h-full" />
              <img src={img5} alt="" className="h-full" />
              <img src={img6} alt="" className="h-full" />
            </div>
          </div>
        </div>
        <p className="text-lg text-center text-blue-200 mt-10 border-t-2 pt-2">
          Copyright© 2021.All Rights Reserved by Travely
        </p>
      </div>
    </div>
  );
};

export default Footer;
