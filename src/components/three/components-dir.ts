import CurvedBox from "./nodes/curved-box";

export const componentsDict = {
  "curved-box": CurvedBox,
} as const;

export type ComponentKey = keyof typeof componentsDict;
