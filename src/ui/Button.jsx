import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base = "px-5 py-3 rounded-lg font-medium transition";

  const variants = {
    primary: "bg-brand hover:bg-blue-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;