import { useContext, useEffect } from "react";
import { ViewContext } from "../context/view-context";
import { Node } from "../models/node";

interface withEditNodeMenuProps {}

const withEditNodeMenu = <P extends object>(Model: React.ComponentType<P>) => {
  return ({ ...props }: P & withEditNodeMenuProps) => {
    const viewContext = useContext(ViewContext);

    useEffect(() => {
      if (!viewContext?.isEditMode) {
        console.debug('is not in edit mode')
        viewContext?.setComponentGuuid(null);
      }
    }, [viewContext?.isEditMode]);

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
      <group onClick={handleEditNode}>
        <Model {...(props as P)} />
      </group>
    );
  };
};

export default withEditNodeMenu;
