/* Three Primary Colors:
  1. Red
  2. Green
  3. Blue

  --------------------------------------------------

  Things to include: 
  1. ClassNames
  2. Types
  3. Danger


  Note: 
  1. Danger will only work if the type is defined
*/

import { ButtonProps } from "../Interfaces/ButtonProps";

const Button = ({
  className,
  type,
  danger,
  title,
  block,
  disabled,
  shape,
  onClick,
}: ButtonProps) => {
  const buttonType = () => {
    if (type === "primary") {
      return "bg-blue-800 text-white border";
    } else if (type === "default") {
      return "bg-white text-black border";
    } else if (type === "dashed") {
      return "bg-white text-black border-2 border-dashed";
    }
  };

  const buttonDanger = () => {
    if (type === "primary" && danger) {
      return "bg-red-600";
    } else if (type === "default" && danger) {
      return "text-red-600 border-red-600";
    } else if (type === "dashed" && danger) {
      return "text-red-600 border-red-600";
    }
  };

  const buttonBlock = () => {
    if (block) {
      return "w-full";
    }
  };

  const buttondisabled = () => {
    if (disabled) {
      return "bg-gray-300 border cursor-not-allowed";
    }
  };

  const buttonShape = () => {
    if (shape === "circle") {
      return "rounded-full";
    }
  };

  return (
    <div
      onClick={buttondisabled() ? undefined : onClick}
      className={`${className} ${buttonType()} ${buttonDanger()} ${buttonBlock()} ${buttondisabled()} ${buttonShape()} px-5 rounded text-black`}
    >
      {title}
    </div>
  );
};

export default Button;
