import React from "react";
import MenuButton from "./common/menu-button";
import { PiPlus } from "react-icons/pi";
import { BiMenu, BiRedo, BiUndo } from "react-icons/bi";
import { useAppDispatch } from "./hooks/use-app-dispatch";
import { createNewScene } from "./redux/features/scene/scene-actions";

const TopMenuTray = () => {
    const dispatch = useAppDispatch()
    const handleCreateNewScene = () => {
        dispatch(createNewScene())
    }
  return (
    <div className="z-10 absolute top-20 left-1/2 transform hidden lg:-translate-x-1/2 h-10 w-1/2 bg-yellow-100/50 gap-3 text-xl rounded-full text-gray-600 lg:flex justify-around px-10 items-center">
      <MenuButton onClick={handleCreateNewScene} className="hover:font-extrabold">
        <PiPlus />
      </MenuButton>
      <MenuButton className="hover:font-extrabold">
        <BiUndo />
      </MenuButton>
      <MenuButton className="hover:font-extrabold">
        <BiRedo />
      </MenuButton>
      <MenuButton className="hover:font-extrabold">
        <BiMenu />
      </MenuButton>
    </div>
  );
};

export default TopMenuTray;
