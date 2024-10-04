import React, { useContext, useEffect } from "react";
import { ViewContext } from "./context/view-context";
import { deleteNodeFromScene } from "./redux/features/nodes/node-actions";
import { useAppDispatch } from "./hooks/use-app-dispatch";

interface ShortcutManagerProps {
  openMenuManager: boolean;
  setOpenMenuManager: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShortcutManager: React.FC<ShortcutManagerProps> = ({
  openMenuManager,
  setOpenMenuManager,
}) => {
  const viewContext = useContext(ViewContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleShortcuts = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key == "\\") {
        setOpenMenuManager(!openMenuManager);
      }

      switch (e.key) {
        case "v":
          viewContext?.setCurrEditMode("view");
          break;
        case "s":
          viewContext?.setCurrEditMode("select");
          break;
        case "m":
          viewContext?.setCurrEditMode("move");
          break;
        case "Delete":
          const guuid = viewContext?.componentGuuid;
          if (guuid && viewContext.currEditMode === "select") {
            console.log("deleting", guuid);
            dispatch(deleteNodeFromScene({ guuid: guuid }));
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleShortcuts);
    return () => {
      window.removeEventListener("keydown", handleShortcuts);
    };
  }, []);
  return <></>;
};

export default ShortcutManager;
