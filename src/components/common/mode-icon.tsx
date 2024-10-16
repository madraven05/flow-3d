import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FaMousePointer } from "react-icons/fa";
import { IoMove } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { EditModes, ViewContext } from "../context/view-context";

const modeDict: { [key: string]: ReactNode } = {
  view: <MdOutlineRemoveRedEye />,
  select: <FaMousePointer />,
  move: <IoMove />,
};

const ModeIcon = () => {
  const [currMode, setCurrMode] = useState<string>("view");

  const viewContext = useContext(ViewContext);

  useEffect(() => {
    setCurrMode(viewContext?.currEditMode as string);
  }, [viewContext?.currEditMode])

  return (
    <div className="fixed text-gray-600 bottom-20 left-5 lg:bottom-10 lg:left-10 p-4 text-lg shadow-lg bg-primary/50 backdrop-blur-md rounded-full">
      {modeDict[currMode]}
    </div>
  );
};

export default ModeIcon;
