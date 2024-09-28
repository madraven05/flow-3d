import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../context/view-context";
import { motion } from "framer-motion-3d";
import { Flow3DNode } from "../models/node";

interface withEditNodeMenuProps {}

const withEditNodeMenu = <P extends object>(Model: React.ComponentType<P>) => {
  return ({ ...props }: P & withEditNodeMenuProps) => {
    const viewContext = useContext(ViewContext);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      if (!viewContext?.isEditMode) {
        console.debug("is not in edit mode");
        viewContext?.setComponentGuuid(null);
      }
    }, [viewContext?.isEditMode]);

    const handleOnHover = () => {
      if (viewContext?.isEditMode) {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }
    };

    const handleLeaveHover = () => {
      document.body.style.cursor = "auto";
      setHovered(false);
    };

    const handleEditNode = () => {
      if (viewContext?.isEditMode) {
        if ("guuid" in props) {
          const guuid = props.guuid as string;
          viewContext.setComponentGuuid(guuid);
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
