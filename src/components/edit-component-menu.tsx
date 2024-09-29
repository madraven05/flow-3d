import { useContext, useEffect, useState } from "react";
import { ViewContext } from "./context/view-context";
import Edit3dInput from "./common/edit-3d-input";
import { useFlow3D } from "./hooks/use-flow3d";
import MenuButton from "./common/menu-button";
import { IoClose } from "react-icons/io5";
import EditInput from "./common/edit-input";
import { Flow3DNode, Flow3DNodeKeys } from "./models/node";
import { useAppDispatch } from "./hooks/use-app-dispatch";
import { updateNodeProperties } from "./redux/features/nodes/node-actions";

const EditComponentMenu = () => {
  const viewContext = useContext(ViewContext);
  const dispatch = useAppDispatch();

  const { nodes } = useFlow3D();

  // form input values states
  const [componentGuuid, setComponentGuuid] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [colorValue, setColorValue] = useState<string>("");
  const [positionValues, setPositionValues] = useState<
    [number, number, number]
  >([0, 0, 0]);
  const [rotationValues, setRotationValues] = useState<
    [number, number, number]
  >([0, 0, 0]);
  const [scaleValues, setScaleValues] = useState<[number, number, number]>([
    0, 0, 0,
  ]);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (viewContext?.componentGuuid !== null && viewContext?.currEditMode == 'select') {
      setOpenMenu(true);
      const node = nodes.filter(
        (n) => n.guuid === viewContext?.componentGuuid
      )[0];

      // set values
      setComponentGuuid(node.guuid as string);
      setColorValue(node.color as string);
      setNameValue(node.name as string);
      setPositionValues(node.position as [number, number, number]);
      setRotationValues(node.rotation as [number, number, number]);
      setScaleValues(node.scale as [number, number, number]);
    } else {
      setOpenMenu(false);
    }
  }, [viewContext?.componentGuuid]);

  //#region onChange methods
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);

    let update: Partial<Flow3DNode> = {};
    update.name = e.target.value as
      | (string & [number, number, number])
      | undefined;
    dispatch(
      updateNodeProperties({
        guuid: componentGuuid,
        update: update,
      })
    );
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);

    let update: Partial<Flow3DNode> = {};
    update.color = e.target.value as
      | (string & [number, number, number])
      | undefined;
    dispatch(
      updateNodeProperties({
        guuid: componentGuuid,
        update: update,
      })
    );
  };

  const updateNode3DProperty = (
    key: Flow3DNodeKeys,
    updatedValues: [number, number, number]
  ) => {
    let update: Partial<Flow3DNode> = {};
    update[key] = updatedValues as
      | (string & [number, number, number])
      | undefined;
    dispatch(
      updateNodeProperties({
        guuid: componentGuuid,
        update: update,
      })
    );
  };

  const handlePositionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: 0 | 1 | 2
  ) => {
    const updatedValues: [number, number, number] = [...positionValues];
    updatedValues[idx] = Number(e.target.value);
    setPositionValues(updatedValues);

    updateNode3DProperty("position", updatedValues);
  };

  const handleRotationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: 0 | 1 | 2
  ) => {
    const updatedValues: [number, number, number] = [...positionValues];
    updatedValues[idx] = Number(e.target.value);
    setRotationValues(updatedValues);

    updateNode3DProperty("rotation", updatedValues);
  };

  const handleScaleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: 0 | 1 | 2
  ) => {
    const updatedValues: [number, number, number] = [...positionValues];
    updatedValues[idx] = Number(e.target.value);
    setScaleValues(updatedValues);

    updateNode3DProperty("scale", updatedValues);
  };
  //#endregion

  const handleCloseMenu = () => {
    viewContext?.setComponentGuuid(null);
  };

  return (
    <div
      className={`${
        openMenu ? "translate-x-0" : "translate-x-full opacity-0"
      } flex flex-col gap-7 fixed transition duration-300 ease-in-out overflow-auto right-5 top-20 bottom-20 lg:right-10 lg:top-36 lg:bottom-20 rounded-md lg:w-72 z-10 backdrop-blur-md  py-7 px-4 shadow-lg bg-orange-100/50`}
    >
      <MenuButton
        onClick={handleCloseMenu}
        className="fixed left-5 top-6 text-base text-gray-500 rounded-full bg-orange-800/10 backdrop-blur-md p-2"
      >
        <IoClose />
      </MenuButton>
      <div>
        <h3 className="uppercase text-center">Edit node</h3>
      </div>

      <p>General</p>

      {/* Name */}
      <EditInput
        label="Name"
        value={nameValue}
        name="name"
        onChange={handleNameChange}
      />

      <p>Transform</p>

      {/* Position */}
      <Edit3dInput
        onChange={handlePositionChange}
        componentId={componentGuuid}
        name="position"
        label="Position"
        values={positionValues}
      />

      {/* Rotation */}
      <Edit3dInput
        onChange={handleRotationChange}
        componentId={componentGuuid}
        name="rotation"
        label="Rotation"
        values={rotationValues}
      />

      {/* Scale */}
      <Edit3dInput
        onChange={handleScaleChange}
        componentId={componentGuuid}
        name="scale"
        label="Scale"
        values={scaleValues}
      />

      <p>Material</p>

      <EditInput
        label="Colour"
        value={colorValue}
        name="color"
        onChange={handleColorChange}
      />
    </div>
  );
};

export default EditComponentMenu;
