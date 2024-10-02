import React, { useContext, useEffect } from "react";
import { ViewContext } from "./context/view-context";

interface ShortcutManagerProps {
  openMenuManager: boolean;
  setOpenMenuManager: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShortcutManager: React.FC<ShortcutManagerProps> = ({
  openMenuManager,
  setOpenMenuManager,
}) => {
  const viewContext = useContext(ViewContext);

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
