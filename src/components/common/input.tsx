import React, { HTMLAttributes, ReactNode } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}
const Input: React.FC<InputProps> = (props) => {
  const { icon = null } = props;
  return (
    <div className="flex">
      <div className="relative">{icon}</div>
      <input className="p-2 bg-black/10 backdrop-blur-lg rounded-md shadow-inner" {...props} />
    </div>
  );
};

export default Input;
