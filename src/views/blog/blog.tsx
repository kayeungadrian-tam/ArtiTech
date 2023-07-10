import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { BiCalendar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

// import "../../assets/css/blog.css";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button/button";

type BlogMeta = {
  displayName: string;
  uuid: string;
  createdAt: string;
  thumbnail: string;
};

interface BlogProps {
  blogMeta?: BlogMeta;
  title: string;
}

const BlogPost = ({ blogMeta, title }: BlogProps) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const markdownContent = "# Hello **React Markdown**!";

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              {/* title */}
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {title || "Title of the Blog Post"}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      {/* Avatar image */}
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <img src="https://ui-avatars.com/api/?rounded=true" />
                        </div>
                      </div>
                      {/* Author meta */}
                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-body-color">
                          @<span>{blogMeta?.displayName || "author"}</span>
                        </h4>
                      </div>
                    </div>
                    {/* Blog meta */}
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-2">
                          <BiCalendar />
                        </span>
                        12 Jan 2024
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <BsEye />
                        </span>
                        35
                      </p>
                      <div className="flex items-center ml-5">
                        <Button
                          backgroundColor="transparent"
                          size="small"
                          icon="like"
                          onClick={handleLike}
                          label={"Like " + likes}
                        />
                        <Button
                          backgroundColor="transparent"
                          size="small"
                          icon="dislike"
                          onClick={handleDislike}
                          label={"Dislike " + dislikes}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog intro */}
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative">
                      <img
                        src="https://source.unsplash.com/random"
                        className="w-full h-80 object-cover object-center rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div className="blog-post">
    //   <div className="header-section">
    //     <h2 className="title">Title of the Blog Post</h2>
    //     <h3 className="subtitle">Subtitle of the Blog Post</h3>
    //     <div className="flex justify-evenly items-evenly">
    //       <span className="text-red-500">Author: {blogMeta?.displayName}</span>
    //       <span>Created at: {blogMeta?.createdAt}</span>
    //     </div>
    //   </div>

    //   <div className="flex justify-evenly ">
    //     <Button
    //       size="small"
    //       icon="like"
    //       onClick={handleLike}
    //       label={"Like " + likes}
    //     />

    //     <Button
    //       size="small"
    //       icon="dislike"
    //       onClick={handleDislike}
    //       label={"Dislike " + dislikes}
    //     />
    //   </div>

    //   <div className="thumbnail">
    //     <img src={blogMeta?.thumbnail} />
    //   </div>

    //   <ReactMarkdown
    //     components={{
    //       // Use h2s instead of h1s
    //       h1: "h2",
    //       // Use a component instead of hrs
    //     }}
    //   >
    //     {markdownContent}
    //   </ReactMarkdown>
    //   <div className="blog-content">
    //     <p className="blog-content">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
    //       quidem iusto aliquam! Nostrum, blanditiis! Rerum voluptate voluptas
    //       repudiandae pariatur nulla accusantium aspernatur, eius corporis!
    //       Dicta ipsa dolorem est in minus.
    //     </p>
    //     {/* Your blog post content goes here */}
    //   </div>
    // </div>
  );
};

export default BlogPost;
