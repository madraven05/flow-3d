import { useContext, useEffect, useRef, useState } from "react";
import { ViewContext } from "../context/view-context";
import { Html, Line } from "@react-three/drei";
import { PointsProps } from "@react-three/fiber";
import * as THREE from "three";
import { Flow3DEdge, LinePoints } from "../models/edge";
import { motion } from "framer-motion-3d";
import { useGesture } from "@use-gesture/react";
import { getXZDragPosition } from "./with-edit-node-options";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { updateEdgeProperties } from "../redux/features/edges/edge-actions";

interface withEditLineOptionsProps {}

/**
 * HOC that provides editing functionality to a Flow3DEdge.
 * Functionalities - Resizing edge
 * @param Model - Flow3DEdge
 * @returns
 */
const withEditEdgeOptions = <P extends object>(
  Model: React.ComponentType<P>
) => {
  return ({ ...props }: P & withEditLineOptionsProps) => {
    const viewContext = useContext(ViewContext);

    const dispatch = useAppDispatch();

    const [showLineOptions, setShowLineOptions] = useState(false);
    const [lineStartPoint, setLineStartPoint] = useState<
      [number, number, number]
    >([0, 0, 0]);
    const [lineEndPoint, setLineEndPoint] = useState<[number, number, number]>([
      0, 0, 0,
    ]);
    const [dummyLinePoints, setDummyLinePoints] = useState<LinePoints>([
      [0, 0, 0],
    ]);

    const lineStartOptionsRef = useRef<THREE.Group>(null);
    const lineEndOptionsRef = useRef<THREE.Group>(null);

    useEffect(() => {
      if (viewContext?.currEditMode === "view") {
        viewContext.setFreezeOrbitControl(false);
        setShowLineOptions(false);
        document.body.style.cursor = 'auto'
      }
    }, [viewContext?.currEditMode]);

    useEffect(() => {
      if (showLineOptions) {
        if ("points" in props && lineStartOptionsRef.current) {
          const points: LinePoints = props.points as LinePoints;
          const lineStartPoint = points[0] as [number, number, number];
          const lineEndPoint = points[points.length - 1] as [
            number,
            number,
            number
          ];

          lineStartOptionsRef.current.position.set(
            lineStartPoint[0],
            0.5,
            lineStartPoint[2]
          );

          lineEndOptionsRef.current?.position.set(
            lineEndPoint[0],
            0.5,
            lineEndPoint[2]
          );

          setLineStartPoint(lineStartPoint);
          setLineEndPoint(lineEndPoint);
        }
      }
    }, [showLineOptions]);

    const getGuuid = (): string | null => {
      if ("guuid" in props) {
        return props.guuid as string;
      }
      return null;
    };

    //#region event handler functions
    const handleOnClick = () => {
      if (viewContext?.currEditMode === "select") {
        setShowLineOptions(!showLineOptions);
        viewContext.setFreezeOrbitControl(true);
      }
    };

    const handleOnPointerOver = () => {
      if (viewContext?.currEditMode === "select") {
        document.body.style.cursor = "pointer";
      }
    };

    const handleOnPointerLeave = () => {
      document.body.style.cursor = "auto";
      //   setShowLineOptions(false);
    };
    //#endregion

    //#region Drag Functionality
    // start point drag
    const startBind = useGesture({
      onDragEnter: () => {
        // line
      },
      onDrag: ({ offset: [x, y] }) => {
        const newPosition = getXZDragPosition(x, y);
        lineStartOptionsRef.current?.position.set(
          newPosition[0],
          0.5,
          newPosition[2]
        );
        setDummyLinePoints([
          [newPosition[0], 0, newPosition[2]],
          lineEndPoint,
        ]);
        setLineStartPoint([newPosition[0], 0, newPosition[2]]);
      },

      onDragEnd: () => {
        const edgeGuuid = getGuuid();
        if (edgeGuuid) {
          const update: Partial<Flow3DEdge> = {
            points: dummyLinePoints,
          };
          dispatch(
            updateEdgeProperties({
              guuid: edgeGuuid,
              update: update,
            })
          );
          setDummyLinePoints([0,0,0]);
        }
      },
    });

    const endBind = useGesture({
      onDrag: ({ offset: [x, y] }) => {
        const newPosition = getXZDragPosition(x, y);
        lineEndOptionsRef.current?.position.set(
          newPosition[0],
          0.5,
          newPosition[2]
        );
        setDummyLinePoints([
          lineStartPoint,
          [newPosition[0], 0, newPosition[2]],
        ]);
        setLineEndPoint([newPosition[0], 0, newPosition[2]]);
      },

      onDragEnd: () => {
        const edgeGuuid = getGuuid();
        if (edgeGuuid) {
          const update: Partial<Flow3DEdge> = {
            points: dummyLinePoints,
          };
          dispatch(
            updateEdgeProperties({
              guuid: edgeGuuid,
              update: update,
            })
          );
          setDummyLinePoints([0,0,0]);
        }
      },
      
    });
    //#endregion

    return (
      <group
        onClick={handleOnClick}
        onPointerOver={handleOnPointerOver}
        onPointerLeave={handleOnPointerLeave}
      >
        <Model {...(props as P)} />
        {showLineOptions ? (
          <group>
            <group position={[0, 0, 0]} ref={lineStartOptionsRef}>
              <Html>
                <button
                  {...startBind()}
                  className="h-2.5 w-2.5 rounded-full bg-purple-400 outline outline-black"
                />
              </Html>
            </group>
            <group position={[0, 0, 0]} ref={lineEndOptionsRef}>
              <Html>
                <button
                  {...endBind()}
                  className="h-2.5 w-2.5 rounded-full bg-purple-400 outline outline-black"
                />
              </Html>
            </group>

            {/* dummy line */}
            <Line
              lineWidth={2}
              color={"purple"}
              dashed={true}
              dashSize={0.3}
              gapSize={0.2}
              points={dummyLinePoints}
            />
          </group>
        ) : null}
      </group>
    );
  };
};

export default withEditEdgeOptions;
