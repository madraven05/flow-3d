import { CameraProps } from "@react-three/fiber"
import { Flow3DNode} from "./node"
import { Edge } from "./edge"

export interface SceneMetadata {
    id: string | null,
}

export interface Scene {
    metadata: SceneMetadata,
    error?: string,
}
