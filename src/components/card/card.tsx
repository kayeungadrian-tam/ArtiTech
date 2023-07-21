import { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  id: number;
}

export const Card = ({ title, id }: CardProps) => {
  return (
    <>
      <div
        className="
        hover:cursor-pointer 
        hover:bg-black/10
        border-l-[5px] border-primary
        mx-auto bg-whitesmoke  
        shadow md:flex-row md:max-w-xl 
        dark:border-gray-700 
        dark:bg-dark 
        dark:hover:bg-white/10
        rounded-lg
        scale-100 hover:scale-110 ease-in duration-300
        "
      >
        <div className="group">
          <Link to={{ pathname: `/blog/${id}` }}>
            <img
              className="rounded-md"
              src="https://random.imagecdn.app/600/300"
              alt=""
            />
            <div className="p-5">
              <h5
                className="
              mb-2
              group-hover:text-primary text-left
              text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {title}
              </h5>
              <p className="group font-normal text-base text-body-color text-justify dark:text-gray-400 pt-4 pr-4">
                {title}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Link
              </a>
            </div>
          </Link>
        </div>
      </div>
      {/* 
      <div className="container  mx-auto mb-4 items-center justify-between">
        <div className="rounded-t-[4px] overflow-hidden w-80 h-[auto] relative">
          <img
            className="object-cover  rounded-sm h-auto "
            src="https://random.imagecdn.app/600/480"
            alt=""
          />
        </div>
        <div className="group">
          <Link
            to={{
              pathname: `/blog/${id}`,
            }}
            className="flex flex-col items-center p-0 rounded-sm border-l-[5px] border-primary
          mx-auto bg-whitesmoke hover:bg-black/10 shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-dark dark:hover:bg-white/10"
          >
            <div className="flex flex-col justify-between p-4  leading-normal">
              <h5
                className=" text-2xl font-bold tracking-wide  
              group-hover:text-primary text-left"
              >
                {title}
              </h5>
              <p className=" font-normal text-base text-body-color text-justify dark:text-gray-400 pt-4 pr-4">
                {title}
              </p>
            </div>
          </Link>
        </div>
      </div> */}
    </>
  );
};
