import { Vector2, Vector3 } from "three";
import { generateUUID } from "three/src/math/MathUtils.js";

export type LinePoints = (
  | number
  | Vector3
  | [x: number, y: number, z: number]
  | [x: number, y: number, z: number]
  | Vector2
  | [x: number, y: number]
  | [x: number, y: number]
)[];

export interface Flow3DEdge {
  edgeId: string;
  sceneId: string;
  guuid?: string;
  points?: (
    | number
    | Vector3
    | [x: number, y: number, z: number]
    | [x: number, y: number, z: number]
    | Vector2
    | [x: number, y: number]
    | [x: number, y: number]
  )[];
  color?: string;
  width?: number;
  fromNode?: string | null;
  toNode?: string | null;
}

export const createFlow3DEdge = (
  edgeId: string,
  sceneId: string,
  guuid: string = generateUUID(),
  points: LinePoints = [
    [0, 0, 0],
    [0, 0, -1],
  ],
  color: string = "black",
  width: number = 2,
  fromNode: string | null = null,
  toNode: string | null = null
) => ({
  edgeId,
  sceneId,
  guuid,
  points,
  color,
  width,
  fromNode,
  toNode,
});
