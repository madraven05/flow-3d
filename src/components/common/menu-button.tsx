import React, { ButtonHTMLAttributes, useState } from "react";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  popovertext?: string;
}
const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { children, className, popovertext = "" } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <button onPointerOver={() => setHovered(true)} onPointerLeave={() => setHovered(false)} {...props} className={`${className} disabled:text-gray-400 flex gap-5 items-center disabled:translate-y-0 hover:-translate-y-0.5 transition duration-300 ease-in-out`}>
      <p className={`${hovered && popovertext !== "" ? 'inline' : 'hidden'} backdrop-blur-xl w-fit bg-gray-500/50 -left-3 px-2 py-1 text-white rounded-lg absolute top-10 text-xs`}>{popovertext}</p>
      {children}
    </button>
  );
};

export default MenuButton;
