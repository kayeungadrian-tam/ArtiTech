// import BackgroundImage from "../../assets/img/background.jpeg";

import { Footer } from "../../components/";

import { WelcomeContainer } from "../../components/";
// import { Card } from "../../components/card/card";

// import { Link } from "react-router-dom";

// import React from 'react';
// const features = [
//   {
//     name: "Push to deploy.",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     //   icon: CloudArrowUpIcon,
//   },
//   {
//     name: "SSL certificates.",
//     description:
//       "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
//     //   icon: LockClosedIcon,
//   },
//   {
//     name: "Database backups.",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     //   icon: ServerIcon,
//   },
// ];

export default function LandingPage() {
  return (
    <>
      <WelcomeContainer />
      <div className="mx-auto max-w-7xl px-0">
        <section className="bg-gray-100 py-0 ">
          <div className="container mx-auto">
            <div className="flex flex-wrap bg-blue-200">
              <div className="w-full md:w-1/2 lg:w-1/2 p-2">
                <div className="flex flex-col items-center justify-center"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bottom-0 left-0 right-0 py-0 my-auto">
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
