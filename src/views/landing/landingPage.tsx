// A typical landing page in react

// import "../../assets/css/landingPage.css";

// import "../../index.css";

import { Button } from "../../components/button/button";
import { Head } from "../../components/head/head";
import { Header } from "../../components/header/header";

// import { Footer } from "../../components/footer/footer";

import BackgroundImage from "../../assets/img/background.jpeg";

import { Footer } from "../../components/";

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
  return (
    <>
      <header className="fixed top-0 left-0 right-0  py-0">
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
      </header>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
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
        <Footer />
      </div>
    </>
  );
}
