import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-[200px] hover-3d bg-lime-100 items-center rounded-lg m-2 p-2"
    >
      {children}
    </button>
  );
};

export default Button;
