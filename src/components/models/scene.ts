export interface SceneMetadata {
    id: string | null,
}

export interface Scene {
    metadata: SceneMetadata,
    error?: string,
}
