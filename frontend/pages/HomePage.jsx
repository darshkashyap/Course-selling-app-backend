//BASIC HOME PAGE WITH A WELCOME MESSAGE AND A CALL-TO-ACTION BUTTON TO EXPLORE COURSES.
import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    const handleExploreCourses = () => {
        navigate('/courses');
    }   
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-linear-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to Coursera</h1> 
            <p className="text-xl mb-8">Discover a wide range of courses and start learning today!</p>
            <button onClick={handleExploreCourses} className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 transition">
                Explore Courses
            </button>
        </div>
    );
}
