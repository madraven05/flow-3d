import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Scene, SceneMetadata } from "../../../models/scene";
import { Node } from "../../../models/node";

const initialState: Scene = {
  metadata: {
    id: null,
  },
  edges: [],
  nodes: [],
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    createNewSceneRequest(state) {
      console.debug("Request received to create new scene");
    },
    createNewSceneSuccess(state, action: PayloadAction<Scene>) {
      state.metadata = action.payload.metadata;
    },
    createNewSceneFailure(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
    addNodeToSceneRequest(state) {
      console.debug("Request for adding node received");
    },
    addNodeToSceneSuccess(state, action: PayloadAction<Node>) {
      state.nodes.push(action.payload);
    },
    addNodeToSceneFailure(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
  },
});

export const {
  createNewSceneRequest,
  createNewSceneSuccess,
  createNewSceneFailure,
  addNodeToSceneRequest,
  addNodeToSceneSuccess,
  addNodeToSceneFailure
} = sceneSlice.actions;
export default sceneSlice.reducer;
