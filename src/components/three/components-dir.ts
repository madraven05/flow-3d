import arrowEdge from "./edges/arrow-edge";
import DashEdge from "./edges/dash-edge";
import LineEdge from "./edges/line-edge";
import Bucket from "./nodes/aws/bucket";
import AWSLambda from "./nodes/aws/lambda";
import sns from "./nodes/aws/sns";
import sqs from "./nodes/aws/sqs";
import CurvedBox from "./nodes/curved-box";
import Database from "./nodes/database";
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
  "database": Database,
  'sns': sns,
  'sqs': sqs,
  'lambda': AWSLambda
} as const;

export const edgeIdToFCDict = {
  "line-edge": LineEdge,
  "dash-edge": DashEdge,
  "arrow-edge": arrowEdge
} as const;

export type  EdgeIdToFCDictKeys = keyof typeof edgeIdToFCDict;
export type NodeIdToFCDictKeys = keyof typeof nodeIdToFCDict;
