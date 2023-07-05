// A typical footer component in react
// with different styles

import "../../assets/css/footer.css";

import { FaGithub, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
// import FooterProps from '../interface/footer';

type FooterData = {
  text: string;
  link: string;
  linkText: string;
  icon: string;
};

interface FooterProps {
  footerData: FooterData;
}

export const Footer = ({ footerData }: FooterProps) => (
  <footer className="py-4 footer-bg">
    {footerData && ""}
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="flex space-x-4">
        <a href="/about" className="text-black-300 hover:text-red-800">
          About
        </a>
        <a href="/contact" className="text-black-300 hover:text-red-800">
          Contact
        </a>
        <a href="/blog" className="text-black-300 hover:text-red-800">
          Blog
        </a>
      </div>
      <div className="flex mt-4 space-x-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-300 hover:text-gray-400"
        >
          <FaGithub className="h-8 w-8" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-300 hover:text-blue-800"
        >
          <FaFacebook className="h-8 w-8" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-300 hover:text-red-800"
        >
          <FaYoutube className="h-8 w-8" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-300 hover:text-yellow-800"
        >
          <FaInstagram className="h-8 w-8" />
        </a>
      </div>
    </div>
  </footer>
);
