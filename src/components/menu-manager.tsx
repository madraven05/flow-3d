import { FaImage, FaSave, FaUpload } from "react-icons/fa";
import { FaDownload, FaRegMessage } from "react-icons/fa6";
import HorizontalLine from "./common/horizontal-line";
import { BiHelpCircle } from "react-icons/bi";
import {
  MdArrowRightAlt,
  MdCheckBoxOutlineBlank,
  MdDelete,
} from "react-icons/md";
import MenuButton from "./common/menu-button";
import {
  IoClose,
  IoMenuOutline,
  IoRemoveOutline,
  IoTextOutline,
} from "react-icons/io5";
import ComponentCard from "./common/component-card";
import Input from "./common/input";
import { GiLaptop, GiServerRack } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { TbBucket } from "react-icons/tb";
import { AiOutlineDash } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { SiAmazondynamodb, SiAmazonec2, SiAmazonsqs, SiAwslambda, SiNextdns } from "react-icons/si";

const nodesData = [
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
  {
    id: "database",
    icon: <BsDatabase className="text-4xl" />,
    label: "Database",
  },
  {
    id: "text",
    icon: <IoTextOutline className="text-4xl" />,
    label: "Text",
  },
  {
    id: "sns",
    icon: <FaRegMessage className="text-4xl" />,
    label: "AWS SNS",
  },
  {
    id: "sqs",
    icon: <SiAmazonsqs className="text-4xl" />,
    label: "AWS SQS",
  },
  {
    id: "lambda",
    icon: <SiAwslambda className="text-4xl" />,
    label: "AWS Lambda",
  },
  {
    id: "route-53",
    icon: <SiNextdns className="text-4xl" />,
    label: "AWS Route 53",
  },
  {
    id: "ec2",
    icon: <SiAmazonec2 className="text-4xl" />,
    label: "AWS EC2",
  },
  {
    id: "dynamo-db",
    icon: <SiAmazondynamodb className="text-4xl" />,
    label: "AWS Dynamo DB",
  },
];

const edgesData = [
  {
    id: "line-edge",
    icon: <IoRemoveOutline className="text-4xl" />,
    label: "Line",
  },
  {
    id: "dash-edge",
    icon: <AiOutlineDash className="text-4xl" />,
    label: "Dash Edge",
  },
  {
    id: "arrow-edge",
    icon: <MdArrowRightAlt className="text-4xl" />,
    label: "Arrow Edge",
  },
];

interface MenuManagerProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuManager: React.FC<MenuManagerProps> = ({ openMenu, setOpenMenu }) => {
  const [showNodes, setShowNodes] = useState(nodesData.slice(0, 4));

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleSearchNodes = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 0) {
      setShowNodes(
        nodesData.filter((node) =>
          node.label.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setShowNodes(nodesData.slice(0, 4));
    }
  };

  return (
    <>
      <MenuButton
        onClick={handleOpenMenu}
        className={`${
          openMenu ? "hidden" : ""
        } z-10 fixed p-2 top-20 bg-primary left-10 text-3xl rounded-full`}
      >
        <IoMenuOutline />
      </MenuButton>
      <div
        className={`${
          openMenu ? "translate-x-0" : "-translate-x-full opacity-0"
        } z-10 transition duration-300 ease-in-out left-0 w-60 lg:w-72 fixed top-20 bottom-20 overflow-auto lg:top-20 flex flex-col  gap-3  py-10 px-6 bg-primary shadow-lg rounded-md`}
      >
        <MenuButton
          onClick={handleCloseMenu}
          className="fixed right-5 top-5 text-xl rounded-full p-2"
        >
          <IoClose />
        </MenuButton>

        {/* Nodes */}
        <h3 className="uppercase font-semibold -mt-4">Nodes</h3>
        <HorizontalLine />
        <Input placeholder="Search" onChange={handleSearchNodes} />
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {showNodes.map((comp) => (
            <ComponentCard key={comp.id} type="node" componentId={comp.id}>
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
          {edgesData.map((edge) => (
            <ComponentCard key={edge.id} type="edge" componentId={edge.id}>
              {edge.icon}
              <p className="text-xs">{edge.label}</p>
            </ComponentCard>
          ))}
        </div>
        <HorizontalLine />

        {/* File menu */}
        <div className="text-sm flex flex-col gap-3">
          <MenuButton disabled>
            <FaSave />
            <p>Save</p>
          </MenuButton>
          <MenuButton disabled>
            <FaImage />
            <p>Export as</p>
          </MenuButton>
          <MenuButton disabled>
            <FaUpload />
            <p>Import JSON</p>
          </MenuButton>
          <MenuButton disabled>
            <FaDownload />
            <p>Download JSON</p>
          </MenuButton>
        </div>
        <HorizontalLine />

        {/* Canvas Menu */}
        <div className="text-sm flex flex-col gap-3">
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
