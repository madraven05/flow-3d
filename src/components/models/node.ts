import { Vector3 } from "three";

export interface Node {
    id: string,
    position: [number, number, number],
    rotation: [number, number, number],
    scale: [number, number, number], 
}