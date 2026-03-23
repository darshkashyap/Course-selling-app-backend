import React from 'react';
import Header from '../components/Header';
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa';
export default function About() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">About EduPlatform</h1>
                <p className="text-lg mb-6">
                    EduPlatform is an online learning platform dedicated to providing high-quality courses in various subjects. Our mission is to make education accessible to everyone, regardless of their location or background. p[
                        our platform offers a wide range of courses, from programming and data science to design and marketing, all taught by industry experts.
                    ]
                </p>
                <p className="text-lg mb-6">
                    We believe in the power of education to transform lives and empower individuals to achieve their goals. Whether you're looking to learn a new skill, advance your career, or explore a new hobby, EduPlatform has something for you.
                </p>
                <p className="text-lg mb-6">
                    Join our community of learners today and start your educational journey with EduPlatform!
                </p>
                <div>Created by Darsh Kashyap</div>
                <div className="flex gap-4 mt-8">
                    <a href="https://github.com/darshkashyap" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                        <FaGithub className="inline mr-2" /> GitHub
                    </a>
                    <a href="https://instagram.com/imustbedarsh" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                        <FaInstagram className="inline mr-2" /> Instagram
                    </a>
                    <a href="https://linkedin.com/in/darsh-kashyap/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                        <FaLinkedin className="inline mr-2" /> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}