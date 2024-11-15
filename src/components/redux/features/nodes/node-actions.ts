import { createAsyncThunk } from "@reduxjs/toolkit";
import { Flow3DNode, Flow3DNodes } from "../../../models/node";
import {
  addNewNodeToSceneRequest,
  addNewNodeToSceneSuccess,
  deleteNodeSuccess,
  updateNodePropertiesRequest,
  updateNodePropertiesSuccess,
} from "./node-slice";

export const addNodeToScene = createAsyncThunk(
  "node/addNewNode",
  async (node: Flow3DNodes, { dispatch }) => {
    dispatch(addNewNodeToSceneRequest());
    dispatch(addNewNodeToSceneSuccess(node));
  }
);

export const updateNodeProperties = createAsyncThunk(
  "nodes/updateNodeProperties",
  async (
    payload: { guuid: string; update: Partial<Flow3DNode> },
    { dispatch }
  ) => {
    dispatch(updateNodePropertiesRequest());
    dispatch(updateNodePropertiesSuccess(payload));
  }
);

export const deleteNodeFromScene = createAsyncThunk(
  "nodes/deleteNode",
  async (payload: { guuid: string }, { dispatch }) => {
    dispatch(deleteNodeSuccess(payload));
  }
);
