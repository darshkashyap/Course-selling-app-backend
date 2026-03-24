import React from "react";
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Course Selling App. All rights reserved.</p>
      <p>Created by Darsh Kashyap</p>
      <Link to="/about" className="text-gray-400 hover:text-white mt-2 inline-block">  About Us </Link>
      <Link to="/home" className="text-gray-400 hover:text-white mt-2 inline-block ml-4"> Home </Link>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/darshkashyap" target="_blank" className="text-gray-400 hover:text-white">
          <FaGithub />
        </a>
        <a href="https://instagram.com/imustbedarsh" target="_blank" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/darsh-kashyap/" target="_blank" className="text-gray-400 hover:text-white">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
