
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
    description: "Learn React from basics and build modern web applications.",
    image: "https://i.pinimg.com/736x/6b/d6/0d/6bd60d46946b3b1007526d092c785ab3.jpg",
    teacherName: "Anisha Rai",
  },
  {
    name: "Python",
    category: "Programming",
    price: 3000,
    rating: 4.5,
    description: "Learn Python programming from basics.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    teacherName: "Ramesh Maharjan",
  },
  {
    name: "UI/UX Design",
    category: "Designing",
    price: 4000,
    rating: 4.5,
    description: "Learn UI/UX design and create user-friendly interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    teacherName: "Rhythm Bajracharya",
  },
  {
    name: "MySQL",
    category: "Database",
    price: 1800,
    rating: 4.5,
    description: "Learn database management and SQL queries.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    teacherName: "Rohan Karki",
  },
  {
    name: "HTML & CSS",
    category: "Web Development",
    price: 1500,
    rating: 4.6,
    description: "Learn how to create beautiful and responsive websites.",
    image: "https://i.pinimg.com/736x/8e/95/d1/8e95d181e61908ab4d1d793ea7ca24bd.jpg",
    teacherName: "Sujan Shrestha",
  },
  {
    name: "SEO",
    category: "Digital Marketing",
    price: 2000,
    rating: 4.6,
    description: "Learn search engine optimization to grow website traffic.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    teacherName: "Bikash Adhikari",
  },
  {
    name: "Java Programming",
    category: "Programming",
    price: 3500,
    rating: 4.7,
    description: "Learn Java, OOP concepts and programming fundamentals.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    teacherName: "Suman Thapa",
  },
  {
    name: "Graphic Design",
    category: "Designing",
    price: 2500,
    rating: 4.6,
    description: "Learn graphic design, colors, typography and layouts.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    teacherName: "Priya Shrestha",
  },
  {
    name: "MongoDB",
    category: "Database",
    price: 2500,
    rating: 4.8,
    description: "Learn NoSQL database management using MongoDB.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    teacherName: "Niraj Shrestha",
  },
  {
    name: "JavaScript",
    category: "Web Development",
    price: 2000,
    rating: 4.7,
    description: "Learn JavaScript fundamentals and interactive web development.",
    image: "https://i.pinimg.com/1200x/ff/ae/ce/ffaecead7ea4412dd25c2d0478842ef5.jpg",
    teacherName: "Nisha Karki",
  },
  {
    name: "Social Media Marketing",
    category: "Digital Marketing",
    price: 2500,
    rating: 4.7,
    description: "Learn how to grow brands through social media platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    teacherName: "Sneha Lama",
  },
  {
    name: "C Programming",
    category: "Programming",
    price: 1800,
    rating: 4.4,
    description: "Understand programming logic using C language.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    teacherName: "Prabin Gurung",
  },
  {
    name: "Figma Design",
    category: "Designing",
    price: 2200,
    rating: 4.8,
    description: "Learn Figma and create professional website designs.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    teacherName: "Aarati Rai",
  },
  {
    name: "Node JS",
    category: "Web Development",
    price: 3000,
    rating: 4.8,
    description: "Learn backend development using Node.js.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    teacherName: "Aayush Shrestha",
  },
]);
  const categories = courses.map((item) => item.category);
  const unique = ["All", ...new Set(categories)];
  console.log(unique);

  const [selectedCategory,setSelectedCategory]=useState("All")
    const filteredCourses = courses.filter((item) =>
  selectedCategory === "All" || item.category === selectedCategory
);
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
          <div className="flex flex-wrap gap-3 py-4">
      {unique.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedCategory(item)}
          className={`rounded-lg px-3 py-2 text-sm font-medium text-white shadow sm:px-4 sm:text-base ${
            selectedCategory === item
              ? "bg-black"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
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
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
