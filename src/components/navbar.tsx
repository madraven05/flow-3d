import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarItems = [
    {
      id: "home",
      title: "Home",
      link: "/",
    },
    {
      id: "flow-3d",
      title: "Flow3D",
      link: "/flow-3d",
    },
    {
      id: "about",
      title: "About",
      link: "/",
    },
  ];

  return (
    <div className="fixed top-0 right-0 z-20 bg-yellow-50 flex gap-10 w-full py-3 px-10 font-mulish text-xl font-semibold uppercase">
      {navbarItems.map((item) => (
        <a className="hover:-translate-y-0.5 font-semibold hover:font-extrabold transition duration-300 ease-in-out" href={item.link}>{item.title}</a>
      ))}
    </div>
  );
};

export default Navbar;
