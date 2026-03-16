
import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg outline-none transition
        ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}
        focus:ring-2 ${className}`}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;