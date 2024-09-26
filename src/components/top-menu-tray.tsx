import React, { useContext, useEffect, useState } from "react";
import MenuButton from "./common/menu-button";
import { BiMenu, BiPencil, BiRedo, BiUndo } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "./hooks/use-app-dispatch";
import { createNewScene } from "./redux/features/scene/scene-actions";
import { LuWallpaper } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ViewContext } from "./context/view-context";

const TopMenuTray: React.FC = () => {
  const sceneData = useAppSelector((state) => state.scene);
  const dispatch = useAppDispatch();
  const handleCreateNewScene = () => {
    dispatch(createNewScene());
  };
  const [isNewCanvasBtnDisabled, setIsNewCanvasBtnDisabled] = useState(false);

  const viewContext = useContext(ViewContext);

  useEffect(() => {
    if (sceneData.metadata.id) {
      setIsNewCanvasBtnDisabled(true);
    } else {
      setIsNewCanvasBtnDisabled(false);
    }
  }, [sceneData]);

  const handleViewMode = () => {
    viewContext?.setIsEditMode(false);
    viewContext?.setIsViewMode(true);
  };

  const handleEditMode = () => {
    viewContext?.setIsEditMode(true);
    viewContext?.setIsViewMode(false);
  };

  return (
    <div className="z-10 fixed top-20 left-1/2 transform hidden lg:-translate-x-1/2 backdrop-blur-xl h-10 w-1/2 bg-yellow-100/50 gap-3 text-xl rounded-full text-gray-600 lg:flex justify-around px-10 items-center">
      {/* create new scene */}
      <MenuButton
        disabled={isNewCanvasBtnDisabled}
        onClick={handleCreateNewScene}
        className="hover:font-extrabold"
      >
        <LuWallpaper />
      </MenuButton>

      {/* view */}
      <MenuButton
        onClick={handleViewMode}
        disabled={viewContext?.isViewMode}
        className="hover:font-extrabold"
      >
        <MdOutlineRemoveRedEye />
      </MenuButton>

      {/* edit */}
      <MenuButton
        onClick={handleEditMode}
        disabled={viewContext?.isEditMode}
        className="hover:font-extrabold"
      >
        <BiPencil />
      </MenuButton>

      {/* undo */}
      <MenuButton className="hover:font-extrabold">
        <BiUndo />
      </MenuButton>

      {/* redo */}
      <MenuButton className="hover:font-extrabold">
        <BiRedo />
      </MenuButton>

      {/* extra */}
      <MenuButton className="hover:font-extrabold">
        <BiMenu />
      </MenuButton>
    </div>
  );
};

export default TopMenuTray;
