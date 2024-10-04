import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewEdgeToSceneRequest,
  addNewEdgeToSceneSuccess,
  updateEdgePropertiesRequest,
  updateEdgePropertiesSuccess,
} from "./edge-slice";
import { Flow3DEdge } from "../../../models/edge";

export const addEdgeToScene = createAsyncThunk(
  "edges/addNewEdge",
  async (edge: Flow3DEdge, { dispatch }) => {
    dispatch(addNewEdgeToSceneRequest());
    dispatch(addNewEdgeToSceneSuccess(edge));
  }
);

export const updateEdgeProperties = createAsyncThunk(
  "edges/updateEdgeProperties",
  async (
    payload: { guuid: string; update: Partial<Flow3DEdge> },
    { dispatch }
  ) => {
    dispatch(updateEdgePropertiesRequest());
    dispatch(updateEdgePropertiesSuccess(payload));
  }
);
