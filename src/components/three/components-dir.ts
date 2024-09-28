import Bucket from "./nodes/bucket";
import CurvedBox from "./nodes/curved-box";
import Laptop from "./nodes/laptop";
import Mobile from "./nodes/mobile";
import Server from "./nodes/server";

export const componentsDict = {
  "curved-box": CurvedBox,
  "laptop": Laptop,
  "mobile": Mobile,
  "bucket": Bucket,
  "server": Server
} as const;

export type ComponentKey = keyof typeof componentsDict;
