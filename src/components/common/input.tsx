import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}
const Input: React.FC<InputProps> = (props) => {
  const { icon = null } = props;
  return (
    <div className="flex">
      <div className="relative">{icon}</div>
      <input className="p-2 w-full bg-black/5 text-xs font-space-mono backdrop-blur-lg rounded-md shadow-inner transition duration-300 ease-in-out" {...props} />
    </div>
  );
};

export default Input;
