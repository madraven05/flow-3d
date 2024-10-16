import React, {
  ChangeEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Flow3DNode, Flow3DNodes, Flow3DNodeTextNode } from "../../models/node";
import { Html, Plane, Text } from "@react-three/drei";
import { MeshPhongMaterial, MeshStandardMaterial } from "three";
import withEditNodeOptions from "../../hocs/with-edit-node-options";
import { ViewContext } from "../../context/view-context";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { updateNodeProperties } from "../../redux/features/nodes/node-actions";

const TextNode: React.FC<Flow3DNodeTextNode> = ({ color, ...props }) => {
  const [value, setValue] = useState(props.text);
  const [showEditTextInput, setShowEditTextMenu] = useState(false);
  const viewContext = useContext(ViewContext);
  const dispatch = useAppDispatch();

  const handleEditingText = () => {
    if (viewContext?.currEditMode === "select") {
      setShowEditTextMenu(true);
    }
  };

  const handleOnChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const update: Partial<Flow3DNodes> = {
      text: e.target.value,
    };
    dispatch(
      updateNodeProperties({
        guuid: props.guuid,
        update: update,
      })
    );
    setValue(e.target.value);
  };

  return (
    <group onDoubleClick={handleEditingText} {...props}>
      {showEditTextInput ? (
        <Html position={[0, 1, 1]} className="">
          <input
            value={value}
            onChange={handleOnChangeText}
            onBlur={() => setShowEditTextMenu(false)}
            className="bg-white outline outline-black font-space-mono text-sm p-2 rounded-lg backdrop-blur-md shadow-inner"
          />
        </Html>
      ) : null}
      <Text
        fontWeight={0}
        position={[0, 0, -0.3]}
        material={new MeshPhongMaterial({ color: color })}
        fontSize={0.4}
        anchorX={"center"}
        anchorY={"bottom"}
      >
        {value}
      </Text>
    </group>
  );
};

export default withEditNodeOptions(TextNode);
