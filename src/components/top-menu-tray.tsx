import React, { useContext, useEffect, useState } from "react";
import MenuButton from "./common/menu-button";
import { BiMenu, BiRedo, BiSlideshow, BiUndo } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "./hooks/use-app-dispatch";
import { createNewScene } from "./redux/features/scene/scene-actions";
import { LuWallpaper } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ViewContext } from "./context/view-context";
import TrayDropdown, { TrayDropdownData } from "./common/tray-dropdown";
import { FaMousePointer } from "react-icons/fa";
import { IoMove } from "react-icons/io5";

interface TopMenuTrayProps {
  canvasRef: React.RefObject<HTMLDivElement>;
}

const TopMenuTray: React.FC<TopMenuTrayProps> = ({ canvasRef }) => {
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

  useEffect(() => {
    const exitPresentationMode = () => {
      if (viewContext?.isPresentationMode) {
        viewContext.setIsPresentationMode(Boolean(document.fullscreenElement));
      }
    };

    document.addEventListener("fullscreenchange", exitPresentationMode);

    return () => {
      document.removeEventListener("fullscreenchange", exitPresentationMode);
    };
  }, [viewContext?.isPresentationMode]);

  const handleViewMode = () => {
    viewContext?.setCurrEditMode("view");
  };

  const handleSelectMode = () => {
    viewContext?.setCurrEditMode("select");
  };

  const handleMoveMode = () => {
    viewContext?.setCurrEditMode("move");
  };

  const enterPresentationMode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!viewContext?.isPresentationMode) {
      canvas.requestFullscreen?.().then(() => {
        viewContext?.setIsPresentationMode(true);
      });
    }
  };

  const editModeData: TrayDropdownData[] = [
    {
      id: "select",
      icon: <FaMousePointer />,
      label: "Select",
      onClick: handleSelectMode,
      active: false,
    },
    {
      id: "move",
      icon: <IoMove />,
      label: "Move",
      onClick: handleMoveMode,
      active: false,
    },
  ];

  return (
    <div className="z-10 fixed bottom-0 w-full rounded-none flex h-14 lg:top-20 lg:left-1/2 transform lg:-translate-x-1/2 backdrop-blur-xl lg:h-10 lg:w-1/2 bg-primary/50 gap-3 text-xl lg:rounded-full lg:flex justify-around px-10 items-center">
      {/* create new scene */}
      <MenuButton
        popovertext="New Canvas"
        disabled={isNewCanvasBtnDisabled}
        onClick={handleCreateNewScene}
        className="hover:font-extrabold"
      >
        <LuWallpaper />
      </MenuButton>

      {/* view */}
      <MenuButton
        popovertext="View Mode"
        onClick={handleViewMode}
        disabled={viewContext?.currEditMode === "view"}
        className="hover:font-extrabold"
      >
        <MdOutlineRemoveRedEye />
      </MenuButton>

      {/* edit */}
      <TrayDropdown data={editModeData} />

      {/* undo */}
      <MenuButton popovertext="Undo" className="hover:font-extrabold">
        <BiUndo />
      </MenuButton>

      {/* redo */}
      <MenuButton popovertext="Redo" className="hover:font-extrabold">
        <BiRedo />
      </MenuButton>

      {/* presentation mode */}
      <MenuButton
        onClick={enterPresentationMode}
        popovertext="Present"
        className="hover:font-extrabold"
      >
        <BiSlideshow />
      </MenuButton>

      {/* extra */}
      <MenuButton popovertext="More" className="hover:font-extrabold">
        <BiMenu />
      </MenuButton>
    </div>
  );
};

export default TopMenuTray;
