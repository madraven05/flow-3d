export interface Node {
    componentId?: string,
    guuid: string,
    name?: string,
    position?: [number, number, number],
    rotation?: [number, number, number],
    scale?: [number, number, number], 
    color?: string
}

export const getNodeObject = (node: Node): Record<string, string> => {
    const dict: Record<string, string> = {};

    // Add only the properties that are not undefined
    if (node.componentId !== undefined) dict.componentId = node.componentId;
    if (node.guuid !== undefined) dict.guuid = node.guuid;
    if (node.position !== undefined) dict.position = node.position.toString();
    if (node.rotation !== undefined) dict.rotation = node.rotation.toString();
    if (node.scale !== undefined) dict.scale = node.scale.toString();
    if (node.color !== undefined) dict.color = node.color;

    return dict;
};