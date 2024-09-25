import { createAsyncThunk } from "@reduxjs/toolkit";
import { Scene } from "../../../models/scene";
import {
  addNodeToSceneRequest,
  addNodeToSceneSuccess,
  createNewSceneRequest,
  createNewSceneSuccess,
} from "./scene-slice";
import { generateUUID } from "three/src/math/MathUtils.js";
import { Node } from "../../../models/node";

export const createNewScene = createAsyncThunk(
  "scene/createNewScene",
  async (_, { dispatch }) => {
    dispatch(createNewSceneRequest());
    const scene: Scene = {
      metadata: { id: generateUUID() },
      nodes: [],
      edges: [],
    };
    dispatch(createNewSceneSuccess(scene));
  }
);

export const addNodeToScene = createAsyncThunk(
  "scene/createNewScene",
  async (node: Node, { dispatch }) => {
    dispatch(addNodeToSceneRequest());
    dispatch(addNodeToSceneSuccess(node));
  }
);
