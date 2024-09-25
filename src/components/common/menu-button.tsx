import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}
const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { children, className } = props;
  return (
    <button {...props} className={`${className} flex gap-2 items-center disabled:translate-y-0 hover:-translate-y-0.5 transition duration-300 ease-in-out`}>
      {children}
    </button>
  );
};

export default MenuButton;
