import React from "react";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      author: "John Doe",
      date: "July 1, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Blog Post 2",
      author: "Jane Smith",
      date: "July 5, 2023",
      content:
        "Pellentesque ac erat quis nisl commodo commodo vitae vel dolor.",
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            By {blog.author} | {blog.date}
          </p>
          <p className="text-gray-800">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
