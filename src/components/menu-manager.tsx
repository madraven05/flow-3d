import { FaImage, FaSave, FaUpload } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import HorizontalLine from "./common/horizontal-line";
import { BiHelpCircle, BiServer } from "react-icons/bi";
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import MenuButton from "./common/menu-button";
import { IoClose, IoMenuOutline, IoRemoveOutline } from "react-icons/io5";
import { useState } from "react";
import ComponentCard from "./common/component-card";
import { BsDatabase } from "react-icons/bs";
import Input from "./common/input";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { GiLaptop, GiServerRack } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { TbBucket } from "react-icons/tb";

const componentsData = [
  {
    id: "curved-box",
    icon: <MdCheckBoxOutlineBlank className="text-4xl" />,
    label: "Curved Box",
  },
  {
    id: "laptop",
    icon: <GiLaptop className="text-4xl" />,
    label: "Laptop",
  },
  {
    id: "mobile",
    icon: <CiMobile3 className="text-4xl" />,
    label: "Mobile",
  },
  {
    id: "bucket",
    icon: <TbBucket className="text-4xl" />,
    label: "Bucket",
  },
  {
    id: "server",
    icon: <GiServerRack className="text-4xl" />,
    label: "Server",
  },
];

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
        } z-10 fixed p-2 top-20 left-10 text-3xl text-gray-500 rounded-full bg-orange-800/10`}
      >
        <IoMenuOutline />
      </MenuButton>
      <div
        className={`${
          openMenu ? "translate-x-0" : "-translate-x-full opacity-0"
        } z-10 transition duration-300 ease-in-out left-0 w-60 lg:w-72 fixed top-20 bottom-20 overflow-auto lg:top-20 flex flex-col  gap-3 backdrop-blur-xl  py-10 px-6 shadow-lg bg-orange-100/50 rounded-md`}
      >
        <MenuButton
          onClick={handleCloseMenu}
          className="fixed right-5 top-5 text-xl text-gray-500 rounded-full bg-orange-800/10 backdrop-blur-md p-2"
        >
          <IoClose />
        </MenuButton>

        {/* Nodes */}
        <h3 className="uppercase font-semibold -mt-4">Nodes</h3>
        <HorizontalLine />
        <Input placeholder="Search" />
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {componentsData.map((comp) => (
            <ComponentCard componentId={comp.id}>
              {comp.icon}
              <p className="text-xs">{comp.label}</p>
            </ComponentCard>
          ))}
        </div>
        <HorizontalLine />

        {/* Edges */}
        <h3 className="uppercase font-semibold">Edges</h3>
        <HorizontalLine />
        <Input placeholder="Search" />
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <ComponentCard componentId="curved-box">
            <IoRemoveOutline className="text-4xl" />
            <p className="text-xs">Line</p>
          </ComponentCard>
          <ComponentCard componentId="curved-box">
            <LiaLongArrowAltRightSolid className="text-4xl" />
            <p className="text-xs text-center">Straight Arrow</p>
          </ComponentCard>
        </div>
        <HorizontalLine />

        {/* File menu */}
        <div className="text-base flex flex-col gap-3">
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

        {/* Canvas Menu */}
        <div className="text-base flex flex-col gap-3">
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
