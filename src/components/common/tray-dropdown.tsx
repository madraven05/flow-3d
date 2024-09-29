import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import React, { ReactNode } from "react";
import { BiPencil } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { EditModes } from "../context/view-context";

export type TrayDropdownData = {
  id: EditModes;
  icon: ReactNode;
  label: string;
  onClick: () => void;
  active: boolean
};

interface TrayDropdownProps {
  data: TrayDropdownData[];
}

const TrayDropdown: React.FC<TrayDropdownProps> = ({ data }) => {
  return (
    <Menu>
      <MenuButton className={"h-full w-10 flex justify-center items-center"}>
        <div className="relative top-1.5 left-6">
          <FaCaretDown className="text-xs text-gray-400 rotate-180 lg:rotate-0" />
        </div>
        <BiPencil />
      </MenuButton>
      <MenuItems
        transition
        className={
          "lg:mt-2 rounded-lg text-sm bg-orange-100/70 py-2 px-3 flex flex-col gap-2 backdrop-blur-sm transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        }
        anchor="bottom"
      >
        {data.map((item) => (
          <button key={item.id} onClick={item.onClick} className="flex rounded-lg w-full p-2 hover:-translate-y-0.5 transition duration-300 ease-in-out justify-start items-center gap-2">
            {item.icon}
            <p>{item.label}</p>
          </button>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default TrayDropdown;
