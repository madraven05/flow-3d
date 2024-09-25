import { FaImage, FaSave, FaUpload } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import HorizontalLine from "./common/horizontal-line";
import { BiHelpCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import MenuButton from "./common/menu-button";
import Input from "./common/input";
import { CgClose } from "react-icons/cg";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

const MenuManager = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <MenuButton
        onClick={handleOpenMenu}
        className={`${
          openMenu ? "hidden" : ""
        } z-10 fixed p-2 top-20 left-10 text-3xl text-gray-500 rounded-full bg-yellow-800/10`}
      >
        <IoMenuOutline />
      </MenuButton>
      <div
        className={`${openMenu ? 'translate-x-0' : '-translate-x-full opacity-0'} z-10 transition duration-300 ease-in-out bottom-10 left-0 w-80 fixed top-20 overflow-auto lg:top-20 flex flex-col  gap-5  py-10 px-6 shadow-lg bg-yellow-100/50 rounded-md`}
      >
        <MenuButton
          onClick={handleCloseMenu}
          className="absolute right-5 top-5 text-xl text-gray-500 rounded-full bg-yellow-800/10 backdrop-blur-md p-2"
        >
          <IoClose />
        </MenuButton>
        <h2 className="uppercase font-semibold -mt-4">Nodes</h2>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="w-28 h-28 shadow-md hover:-translate-y-0.5 transition duration-300 ease-in-out hover:cursor-pointer" />
          <div className="w-28 h-28 shadow-md hover:-translate-y-0.5 transition duration-300 ease-in-out hover:cursor-pointer" />
          <div className="w-28 h-28 shadow-md hover:-translate-y-0.5 transition duration-300 ease-in-out hover:cursor-pointer" />
        </div>
        <HorizontalLine />
        <div className="text-lg flex flex-col gap-3">
          <MenuButton>
            <FaSave />
            <p>Save</p>
          </MenuButton>
          <MenuButton>
            <FaImage />
            <p>Export as</p>
          </MenuButton>
          <MenuButton>
            <FaUpload />
            <p>Import JSON</p>
          </MenuButton>
          <MenuButton>
            <FaDownload />
            <p>Download JSON</p>
          </MenuButton>
        </div>
        <HorizontalLine />
        <div className="text-lg flex flex-col gap-3">
          <MenuButton>
            <BiHelpCircle />
            <p>Need Help?</p>
          </MenuButton>
          <MenuButton>
            <MdDelete />
            <p>Clear Canvas</p>
          </MenuButton>
        </div>
      </div>
    </>
  );
};

export default MenuManager;
