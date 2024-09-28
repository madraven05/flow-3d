import { createAsyncThunk } from "@reduxjs/toolkit";
import { Scene } from "../../../models/scene";
import {
  createNewSceneRequest,
  createNewSceneSuccess,
} from "./scene-slice";
import { generateUUID } from "three/src/math/MathUtils.js";

export const createNewScene = createAsyncThunk(
  "scene/createNewScene",
  async (_, { dispatch }) => {
    dispatch(createNewSceneRequest());
    const scene: Scene = {
      metadata: { id: generateUUID() },
    };
    dispatch(createNewSceneSuccess(scene));
  }
);
