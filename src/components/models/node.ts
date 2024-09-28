export interface Flow3DNode {
    componentId?: string,
    guuid: string,
    sceneGuuid: string,
    name?: string,
    position?: [number, number, number],
    rotation?: [number, number, number],
    scale?: [number, number, number], 
    color?: string
}

export type Flow3DNodeKeys = keyof Flow3DNode;