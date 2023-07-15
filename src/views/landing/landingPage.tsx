import BackgroundImage from "../../assets/img/background.jpeg";

import { Footer } from "../../components/";

import { WelcomeContainer } from "../../components/";
import { Card } from "../../components/card/card";

import { Link } from "react-router-dom";

// import React from 'react';
const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    //   icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    //   icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    //   icon: ServerIcon,
  },
];

export default function LandingPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      timeCreated: "July 1, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "CSS Tips and Tricks",
      author: "Jane Smith",
      timeCreated: "July 5, 2023",
      content:
        "Pellentesque ac erat quis nisl commodo commodo vitae vel dolor.",
    },
    // Add more blog post objects as needed
  ];

  return (
    <>
      <WelcomeContainer />
      {blogPosts.map((blog) => (
        <Card title={blog.title} content={blog.content} id={blog.id} />
      ))}
      <br></br>
      <br></br>
      <br></br>
      ss
      <div className="mx-auto max-w-7xl px-0">
        <section className="bg-gray-100 py-0 ">
          <div className="container mx-auto">
            <div className="flex flex-wrap bg-blue-200">
              <div className="w-full md:w-1/2 lg:w-1/2 p-2">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Welcome to Our Website
                  </h2>
                  <h3>Hi there</h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <img
                  src={BackgroundImage}
                  alt="Image 1"
                  className="rounded-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="overflow-hidden bg-white py-20 ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* Welcome Container */}
                <section className="bg-gray-200 py-8">
                  <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Welcome</h2>
                    <div className="grid gap-4">
                      <div className="bg-white p-4 rounded-md">
                        <h3 className="text-xl font-semibold">News 1</h3>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md">
                        <h3 className="text-xl font-semibold">News 2</h3>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Trending News Container */}
                <section className="bg-gray-200 py-8">
                  <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Trending News</h2>
                    <div className="grid gap-4">
                      <div className="bg-white p-4 rounded-md">
                        <h3 className="text-xl font-semibold">News 1</h3>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md">
                        <h3 className="text-xl font-semibold">News 2</h3>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md">
                        <h3 className="text-xl font-semibold">News 3</h3>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              src={BackgroundImage}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg-img"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 py-0">
        <Footer
          footerData={{
            text: "",
            link: "",
            linkText: "",
            icon: "",
          }}
        />
      </div>
    </>
  );
}
