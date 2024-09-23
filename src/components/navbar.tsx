import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarItems = [
    {
      id: "blog",
      title: "Blog",
      link: "/",
    },
    {
      id: "about",
      title: "About",
      link: "/",
    },
  ];

  return (
    <div className="fixed flex gap-5 top-0 right-0 h-14 py-3 px-10 font-mulish text-xl font-extrabold uppercase">
      {navbarItems.map((item) => (
        <a href={item.link}>{item.title}</a>
      ))}
    </div>
  );
};

export default Navbar;
