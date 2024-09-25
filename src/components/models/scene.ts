import { CameraProps } from "@react-three/fiber"
import { Node } from "./node"
import { Edge } from "./edge"

export interface SceneMetadata {
    id: string | null,
}

export interface Scene {
    metadata: SceneMetadata,
    nodes: Node[],
    edges: Edge[],
    error?: string,
}
