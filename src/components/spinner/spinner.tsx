import clsx from "clsx";

import "../../assets/css/spinner.css";

const sizes = {
  sm: "small",
  md: "medium",
  lg: "large",
  xl: "extraLarge",
};

const colors = {
  blue: "blueSpinner",
  red: "redSpinner",
  black: "blackSpinner",
};

export type SpinnerProps = {
  /**
   * Size of the spinner?
   */
  size?: keyof typeof sizes;
  color?: keyof typeof colors;

  /**
   * Does it need to overlay the whole page?
   */
  overlay?: boolean;
};

export const Spinner = ({
  color = "blue",
  size = "md",
  overlay = false,
}: SpinnerProps) => {
  const spinnerClasses = clsx("spinner", colors[color], sizes[size]);

  return (
    <div>
      {overlay ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
          <div className={spinnerClasses}></div>
        </div>
      ) : (
        <div className={spinnerClasses}></div>
      )}
      <div className="spinner-overlay"></div>
    </div>
    //{" "}
  );
};
