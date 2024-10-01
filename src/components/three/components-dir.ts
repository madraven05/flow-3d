import { Flow3DNodes } from "../models/node";
import Bucket from "./nodes/bucket";
import CurvedBox from "./nodes/curved-box";
import Laptop from "./nodes/laptop";
import Mobile from "./nodes/mobile";
import Server from "./nodes/server";
import TextNode from "./nodes/text";

export const componentsDict = {
  "curved-box": CurvedBox,
  "laptop": Laptop,
  "mobile": Mobile,
  "bucket": Bucket,
  "server": Server,
  "text": TextNode,
} as const;

export type ComponentKey = keyof typeof componentsDict;
