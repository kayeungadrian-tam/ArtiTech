import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Card } from "../../components/card/card";

const BlogList = () => {
  // Fetch blog posts from API
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "test",
      body: "test",
      userId: 1,
      tags: ["test"],
      reactions: 1,
    },
  ]);
  const location = useLocation();

  useEffect(() => {
    const handleScrollRestoration = () => {
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem("scrollPosition");
      }
    };

    // Save the scroll position when navigating away from the component
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    });

    // Scroll to the saved position when navigating back to the component
    handleScrollRestoration();

    return () => {
      window.removeEventListener("beforeunload", handleScrollRestoration);
    };
  }, [location.pathname]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setBlogs(data.posts);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="-mx-4 flex flex-wrap justify-center p-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full px-4 md:w-2/5 lg:w-1/3 xl:w-1/4 mb-8 md:px-8 md:mb-12"
            >
              <Card title={blog.title} id={blog.id} />
              {/* <SingleBlog blog={blog} /> */}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold mb-4">Coming Soon!</p>
        </div>
        {/* Render the blog posts data from the array */}
        {blogs.map((post) => (
          <div key={post.id}>
            <Card title={post.title} id={post.id} />
          </div>
        ))}
      </section>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              By {blog.author} | {blog.date}
            </p>
            <p className="text-gray-800">{blog.content}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default BlogList;
