import { createAsyncThunk } from "@reduxjs/toolkit";
import { Scene, SceneMetadata } from "../../../models/scene";
import { createNewSceneRequest, createNewSceneSuccess } from "./scene-slice";
import { generateUUID } from "three/src/math/MathUtils.js";

export const createNewScene = createAsyncThunk(
  "scene/createNewScene",
  async (_, { dispatch }) => {
    dispatch(createNewSceneRequest());
    console.log("New scene action request sent!");
    const scene: Scene = {
      metadata: { id: generateUUID() },
      nodes: [],
      edges: [],
    };
    dispatch(createNewSceneSuccess(scene));
  }
);
