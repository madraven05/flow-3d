import React, { useContext, useEffect, useState } from "react";
import { ViewContext } from "./context/view-context";
import { useAppSelector } from "./hooks/use-app-dispatch";
import { getNodeObject, Node } from "./models/node";
import Textarea from "./common/text-area";
import Input from "./common/input";
import HorizontalLine from "./common/horizontal-line";
import Edit3dInput from "./common/edit-3d-input";

const EditComponentMenu = () => {
  const viewContext = useContext(ViewContext);
  const sceneState = useAppSelector((state) => state.scene);

  const [nodeProps, setNodeProps] = useState<Node | null>(null);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (viewContext?.componentGuuid !== null) {
      setOpenMenu(true);
      const node = sceneState.nodes.filter(
        (n) => n.guuid === viewContext?.componentGuuid
      )[0];
      console.debug(`Editing node: ${node.componentId}`);
      setNodeProps(node);
    } else {
      setOpenMenu(false);
    }
  }, [viewContext?.componentGuuid]);

  return (
    <div
      className={`${
        openMenu ? "translate-x-0" : "translate-x-full opacity-0"
      } flex flex-col gap-7 fixed transition duration-300 ease-in-out overflow-auto right-5 top-20 bottom-20 lg:right-10 lg:top-36 lg:bottom-20 rounded-md lg:w-72 z-10 backdrop-blur-md  py-7 px-4 shadow-lg bg-orange-100/50`}
    >
        
      <div>
        <h3 className="uppercase text-center">Edit node</h3>
      </div>
      
      <p>General</p>

      <div className="flex gap-5 items-center justify-between">
        <p className="text-xs font-semibold">Name</p>
        <Input value={nodeProps?.name} />
      </div>

      <div className="flex gap-5 items-center justify-between">
        <p className="text-xs font-semibold">Type</p>
        <Input disabled value={nodeProps?.componentId} />
      </div>
      <HorizontalLine />

      <p>Transform</p>

      {/* Position */}
      <Edit3dInput
        id="position"
        label="Position"
        values={nodeProps?.position}
      />

      {/* Rotation */}
      <Edit3dInput
        id="rotation"
        label="Rotation"
        values={nodeProps?.rotation}
      />

      {/* Scale */}
      <Edit3dInput id="scale" label="Scale" values={nodeProps?.scale} />

      <p>Material</p>

      <div className="flex gap-5 items-center justify-between">
        <p className="text-xs font-semibold">Color</p>
        <Input value={nodeProps?.color} />
      </div>
    </div>
  );
};

export default EditComponentMenu;
