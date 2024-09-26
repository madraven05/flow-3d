import React, { useEffect, useState } from "react";
import MenuButton from "./common/menu-button";
import { BiMenu, BiRedo, BiUndo } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "./hooks/use-app-dispatch";
import { createNewScene } from "./redux/features/scene/scene-actions";
import { LuWallpaper } from "react-icons/lu";

const TopMenuTray: React.FC = () => {
  const sceneData = useAppSelector((state) => state.scene);
  const dispatch = useAppDispatch();
  const handleCreateNewScene = () => {
    dispatch(createNewScene());
  };
  const [isNewCanvasBtnDisabled, setIsNewCanvasBtnDisabled] = useState(false);

  useEffect(() => {
    if (sceneData.metadata.id) {
      setIsNewCanvasBtnDisabled(true);
    } else {
      setIsNewCanvasBtnDisabled(false);
    }
  }, [sceneData]);
  return (
    <div className="z-10 fixed top-20 left-1/2 transform hidden lg:-translate-x-1/2 h-10 w-1/2 bg-yellow-100/50 gap-3 text-xl rounded-full text-gray-600 lg:flex justify-around px-10 items-center">
      <MenuButton
        disabled={isNewCanvasBtnDisabled}
        onClick={handleCreateNewScene}
        className="hover:font-extrabold disabled:text-gray-400"
      >
        <LuWallpaper />
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
