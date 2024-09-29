import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../context/view-context";
import { motion } from "framer-motion-3d";

interface withEditNodeMenuProps {}

const withEditNodeMenu = <P extends object>(Model: React.ComponentType<P>) => {
  return ({ ...props }: P & withEditNodeMenuProps) => {
    const viewContext = useContext(ViewContext);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      if(viewContext?.currEditMode !== "view") {
        const editMode = viewContext?.currEditMode;
        switch (editMode) {
          case "move":
            
            break;
          case "select":
            break;
          default:
            break;
        }
      } else {
        viewContext.setComponentGuuid(null);
      }
    }, [viewContext?.currEditMode])

    const handleOnHover = () => {
      if (viewContext?.currEditMode !== "view") {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }
    };

    const handleLeaveHover = () => {
      document.body.style.cursor = "auto";
      setHovered(false);
    };

    const handleEditNode = () => {
      if (viewContext?.currEditMode !== "view") {
        if ("guuid" in props) {
          const guuid = props.guuid as string;
          viewContext?.setComponentGuuid(guuid);
        }
      } else {
        viewContext?.setComponentGuuid(null);
      }
    };

    return (
      <motion.group
        onPointerOver={handleOnHover}
        onPointerLeave={handleLeaveHover}
        animate={{ y: hovered ? 0.5 : 0 }}
        onClick={handleEditNode}
      >
        <Model {...(props as P)} />
      </motion.group>
    );
  };
};

export default withEditNodeMenu;
