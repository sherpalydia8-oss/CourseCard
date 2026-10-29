
import { useState } from "react";
import CourseCard from "./Components/CourseCard";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [courses, setCourses] = useState([
    {
      name: "React JS",
      category: "Web Development",
      price: 2500,
      rating: 4.8,
      description: "Learn React from basics",
      image:
        "https://i.pinimg.com/736x/6b/d6/0d/6bd60d46946b3b1007526d092c785ab3.jpg",
      teacherName: "Anisha Rai",
    },
    {
      name: "Python",
      category: "Programming",
      price: 3000,
      rating: 4.5,
      description: "Learn Python from basics",
      image:
        "https://i.pinimg.com/736x/8e/95/d1/8e95d181e61908ab4d1d793ea7ca24bd.jpg",
      teacherName: "Ramesh Maharjan",
    },
    {
      name: "UI/UX",
      category: "Designing",
      price: 4000,
      rating: 4.5,
      description: "Learn UI/UX from basics",
      image:
        "https://i.pinimg.com/1200x/ff/ae/ce/ffaecead7ea4412dd25c2d0478842ef5.jpg",
      teacherName: "Rhythm Bajracharya",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    description: "",
    image: "",
    teacherName: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      formData.price === "" ||
      Number(formData.price) < 0
    ) {
      alert("Please enter a course name, category, and valid price.");
      return;
    }

    if (
      formData.rating !== "" &&
      (Number(formData.rating) < 0 || Number(formData.rating) > 5)
    ) {
      alert("Rating must be between 0 and 5.");
      return;
    }

    const newCourse = {
      ...formData,
      price: Number(formData.price),
      rating: formData.rating === "" ? null : Number(formData.rating),
    };

    setCourses([...courses, newCourse]);
    setShowForm(false);

    setFormData({
      name: "",
      category: "",
      price: "",
      rating: "",
      description: "",
      image: "",
      teacherName: "",
    });
  }

  function handleCancel() {
    setShowForm(false);
    setFormData({
      name: "",
      category: "",
      price: "",
      rating: "",
      description: "",
      image: "",
      teacherName: "",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Page heading */}
      <div className="mb-8 flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Our Courses
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 sm:px-4 sm:text-base"
        >
          + Add Course
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
            {/* Popup heading */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Add New Course
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Fill in your course details.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCancel}
                className="rounded-full bg-gray-100 px-3 py-2 text-gray-600 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Course Name *"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />

                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  type="text"
                  placeholder="Category *"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    type="number"
                    min="0"
                    placeholder="Price (Rs.) *"
                    className="w-full min-w-0 rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                    required
                  />

                  <input
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    placeholder="Rating (optional)"
                    className="w-full min-w-0 rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                  />
                </div>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Course Description"
                  rows="3"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                />

                <input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  type="url"
                  placeholder="Image URL (optional)"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                />

                <input
                  name="teacherName"
                  value={formData.teacherName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Teacher Name"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
