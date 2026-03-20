import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminCourse() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCourses = async () => {
        try {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");

            if (role !== "admin") {
                alert("Access denied");
                return navigate("/");
            }

            const res = await axios.get(
                "http://localhost:3000/admin/courses",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCourses(res.data.courses);

        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // DELETE COURSE
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");

            if (!window.confirm("Delete this course?")) return;

            await axios.delete(
                `http://localhost:3000/admin/course/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCourses(courses.filter(course => course._id !== id));

        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    // EDIT COURSE
    const handleEdit = (id) => {
        navigate(`/admin/edit-course/${id}`);
    };

    if (loading) {
        return <div className="text-center mt-10">Loading courses...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">My Courses</h2>

            {courses.length === 0 ? (
                <p>No courses found</p>
            ) : (
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Description</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course._id}>
                                <td className="px-4 py-2 border">{course.title}</td>
                                <td className="px-4 py-2 border">{course.description}</td>
                                <td className="px-4 py-2 border">₹{course.price}</td>

                                <td className="px-4 py-2 border space-x-2">
                                    <button
                                        onClick={() => handleEdit(course._id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(course._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}