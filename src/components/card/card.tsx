import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  id: number;
}

export const Card = ({ title, content, id }: CardProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="container mx-auto mb-4 items-center justify-between ">
        <div className="group">
          <Link
            to={{
              pathname: `/blog/${id}`,
              state: { title: title, content: content, id: id },
            }}
            className="flex flex-col items-center p-0 rounded-lg border-l-[5px] border-primary
         mx-auto bg-whitesmoke hover:bg-black/10 shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-dark dark:hover:bg-white/10"
          >
            <div className="flex flex-col justify-between p-4  leading-normal">
              <h5
                className=" text-2xl font-bold tracking-wide  
                group-hover:text-primary text-left"
              >
                Noteworthy technology acquisitions 2021
              </h5>
              <p className=" font-normal text-base text-body-color text-justify dark:text-gray-400 pt-4 pr-4">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="rounded-t-[4px] overflow-hidden h-[full] relative">
              <img
                className="object-cover  rounded-xl"
                src="https://random.imagecdn.app/600/480"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
