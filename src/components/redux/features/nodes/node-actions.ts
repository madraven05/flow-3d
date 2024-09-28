import { createAsyncThunk } from "@reduxjs/toolkit";
import { Flow3DNode } from "../../../models/node";
import {
  addNewNodeToSceneRequest,
  addNewNodeToSceneSuccess,
  updateNodePropertiesRequest,
  updateNodePropertiesSuccess,
} from "./node-slice";

export const addNodeToScene = createAsyncThunk(
  "node/addNewNode",
  async (node: Flow3DNode, { dispatch }) => {
    dispatch(addNewNodeToSceneRequest());
    dispatch(addNewNodeToSceneSuccess(node));
  }
);

export const updateNodeProperties = createAsyncThunk(
    "nodes/updateNodeProperties",
    async (payload: {guuid: string, update: Partial<Flow3DNode>}, {dispatch}) => {
        dispatch(updateNodePropertiesRequest());
        dispatch(updateNodePropertiesSuccess(payload))
    }
)