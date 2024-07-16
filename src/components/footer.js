import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-4">
          <h1 className="text-2xl font-bold text-center md:text-left">
            Tatanagar Treats
          </h1>
          <p className="text-gray-400 text-center pt-4 md:mt-4">
            Your Premier Online Food Ordering Destination in Jamshedpur
          </p>
        </div>
        <div className="mb-4 md:mb-0 flex text-center  md:justify-normal md:text-left md:items-start justify-center items-center flex-col gap-3">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="text-gray-400">
            <li className="my-1">
              <Link to="/">Home</Link>
            </li>
            <li className="my-1">
              <Link to="/about">About Us</Link>
            </li>
            <li className="my-1">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 flex justify-center md:justify-normal md:items-start text-center md:text-left items-center flex-col gap-3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-400">support@tatanagartreats.com</p>
          <p className="text-gray-400">+91-9135407413</p>
          <p className="text-gray-400 text-center">
            123 Food Street, Jamshedpur, Jharkhand, India
          </p>
        </div>
        <div className="flex justify-center md:flex-col gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/mjgupta0"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mjgupta91/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center text-gray-400 mt-4">
        &copy; 2024 Tatanagar Treats. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
