import arrowEdge from "./edges/arrow-edge";
import DashEdge from "./edges/dash-edge";
import LineEdge from "./edges/line-edge";
import Bucket from "./nodes/aws/bucket";
import AWSLambda from "./nodes/aws/lambda";
import Route53 from "./nodes/aws/route-53";
import sns from "./nodes/aws/sns";
import sqs from "./nodes/aws/sqs";
import AWSEC2 from "./nodes/aws/ec2";
import CurvedBox from "./nodes/curved-box";
import Database from "./nodes/database";
import Laptop from "./nodes/laptop";
import Mobile from "./nodes/mobile";
import Server from "./nodes/server";
import TextNode from "./nodes/text";
import DynamoDB from "./nodes/aws/dynamo-db";
import AwsRDS from "./nodes/aws/rds";
import vpc from "./nodes/aws/vpc";
import AwsIGW from "./nodes/aws/igw";



export const nodeIdToFCDict = {
  "curved-box": CurvedBox,
  laptop: Laptop,
  mobile: Mobile,
  bucket: Bucket,
  server: Server,
  text: TextNode,
  database: Database,
  sns: sns,
  sqs: sqs,
  lambda: AWSLambda,
  "route-53": Route53,
  "ec2": AWSEC2,
  "dynamo-db": DynamoDB,
  "aws-rds": AwsRDS,
  vpc: vpc,
  "aws-igw": AwsIGW
} as const;

export const edgeIdToFCDict = {
  "line-edge": LineEdge,
  "dash-edge": DashEdge,
  "arrow-edge": arrowEdge,
} as const;

export type EdgeIdToFCDictKeys = keyof typeof edgeIdToFCDict;
export type NodeIdToFCDictKeys = keyof typeof nodeIdToFCDict;
