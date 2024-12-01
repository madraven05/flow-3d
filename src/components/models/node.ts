export interface Flow3DNode {
  componentId?: string;
  guuid: string;
  sceneGuuid: string;
  name?: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}

export interface Flow3DNodeTextNode extends Flow3DNode {
  text?: string;
}

export const createFlow3DNode = ({
  componentId,
  guuid,
  sceneGuuid,
  name = `${componentId + `-` + guuid.substring(0, 4)}`,
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color = "white",
}: Flow3DNode): Flow3DNode => ({
  componentId,
  guuid,
  sceneGuuid,
  name,
  position,
  rotation,
  scale,
  color,
});

export const createFlow3DTextNode = (
  componentId: string,
  guuid: string,
  sceneGuuid: string,
  name: string = `${componentId + `-` + guuid.substring(0, 4)}`,
  position: [number, number, number] = [0, 1, 0],
  rotation: [number, number, number] = [-Math.PI / 2, 0, 0],
  scale: [number, number, number] = [1, 1, 1],
  color: string = "black",
  text: string = "Text"
): Flow3DNodeTextNode => ({
  componentId,
  guuid,
  sceneGuuid,
  name,
  position,
  rotation,
  scale,
  color,
  text,
});

export type Flow3DNodes = Flow3DNode | Flow3DNodeTextNode;
export type Flow3DNodeKeys = keyof Flow3DNode;
