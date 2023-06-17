// import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";

import "../../assets/css/button.css";

const buttonSize = {
  small: "py-2 px-4 text-xs",
  medium: "py-3 px-5 text-sm",
  large: "py-4 px-6 text-lg",
};

const buttonIcons = {
  google: FcGoogle,
  facebook: BsFacebook,
  github: BsGithub,
  null: "",
};

const buttonIconSize = {
  small: "h-4 w-4",
  medium: "h-5 w-5",
  large: "h-6 w-6",
};

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;

  icon?: "google" | "facebook" | "github" | "null";

  /**
   * Optional click handler
   */
  onClick?: () => void;
  id?: string;
}

/**
 * Primary UI component for user interaction
 */

export const Button = ({
  primary = false,
  size = "medium",
  icon = "null",
  backgroundColor,
  label,
  id,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "bg-blue-500 hover:bg-blue-700 text-white font-bold border-2 border-blue-500"
    : "bg-white hover:bg-gray-100 text-gray-800 font-semibold border-2 border-gray-200";
  const Icon = buttonIcons[icon];

  return (
    <button
      id={id}
      type="button"
      className={["storybook-button", buttonSize[size], mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {Icon && <Icon className={buttonIconSize[size]} color="" />}
      <span> {label} </span>
    </button>
  );
};
