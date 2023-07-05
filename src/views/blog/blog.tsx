import { useState } from "react";
import ReactMarkdown from "react-markdown";

import "../../assets/css/blog.css";
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
}

const BlogPost = ({ blogMeta }: BlogProps) => {
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
    <div className="blog-post">
      <div className="fix-top">
        <Header
          onLogin={function (): void {
            throw new Error("Function not implemented.");
          }}
          onLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
          onCreateAccount={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="header-section">
        <h2 className="title">Title of the Blog Post</h2>
        <h3 className="subtitle">Subtitle of the Blog Post</h3>
        <div className="flex justify-evenly items-evenly">
          <span className="text-red-500">Author: {blogMeta?.displayName}</span>
          <span>Created at: {blogMeta?.createdAt}</span>
        </div>
      </div>

      <div className="flex justify-evenly ">
        <Button
          size="small"
          icon="like"
          onClick={handleLike}
          label={"Like " + likes}
        />

        <Button
          size="small"
          icon="dislike"
          onClick={handleDislike}
          label={"Dislike " + dislikes}
        />
      </div>

      <div className="thumbnail">
        <img src={blogMeta?.thumbnail} />
      </div>

      <ReactMarkdown
        components={{
          // Use h2s instead of h1s
          h1: "h2",
          // Use a component instead of hrs
        }}
      >
        {markdownContent}
      </ReactMarkdown>
      <div className="blog-content">
        <p className="blog-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          quidem iusto aliquam! Nostrum, blanditiis! Rerum voluptate voluptas
          repudiandae pariatur nulla accusantium aspernatur, eius corporis!
          Dicta ipsa dolorem est in minus.
        </p>
        {/* Your blog post content goes here */}
      </div>
    </div>
  );
};

export default BlogPost;
