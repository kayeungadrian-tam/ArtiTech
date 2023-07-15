import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";

const buttonSize = {
  small: "py-2 px-4 text-xs",
  medium: "py-3 px-5 text-sm",
  large: "py-4 px-6 text-lg",
};

const buttonIcons = {
  google: FcGoogle,
  facebook: BsFacebook,
  github: BsGithub,
  like: BiLike,
  dislike: BiDislike,
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

  icon?: "google" | "facebook" | "github" | "like" | "dislike" | "null";

  /**
   * Optional click handler
   */
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;

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
    ? "lease-in-up  bg-primary  font-bold text-white transition hover:bg-opacity-90  md:block md:px-9 lg:px-6 xl:px-9"
    : "bg-black/20  font-semibold text-black  ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30";
  const Icon = buttonIcons[icon];

  return (
    <button
      id={id}
      type="button"
      className={[
        "rounded-xl py-3 px-8 text-base m-1 hover:shadow-signUp  duration-300 flex items-center justify-center gap-3",
        buttonSize[size],
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {Icon && <Icon className={buttonIconSize[size]} color="" />}
      <span> {label} </span>
    </button>
  );
};
