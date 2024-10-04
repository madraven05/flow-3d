import { Flow3DNodes } from "../models/node";
import LineEdge from "./edges/line-edge";
import Bucket from "./nodes/bucket";
import CurvedBox from "./nodes/curved-box";
import Laptop from "./nodes/laptop";
import Mobile from "./nodes/mobile";
import Server from "./nodes/server";
import TextNode from "./nodes/text";

export const nodeIdToFCDict = {
  "curved-box": CurvedBox,
  "laptop": Laptop,
  "mobile": Mobile,
  "bucket": Bucket,
  "server": Server,
  "text": TextNode,
} as const;

export const edgeIdToFCDict = {
  "line-edge": LineEdge
} as const;

export type  EdgeIdToFCDictKeys = keyof typeof edgeIdToFCDict;
export type NodeIdToFCDictKeys = keyof typeof nodeIdToFCDict;
