import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Scene } from "../../../models/scene";

const initialState: Scene = {
  metadata: {
    id: null,
  },
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    createNewSceneRequest(state) {
      console.debug("Request received to create new scene:", state.metadata.id);
    },
    createNewSceneSuccess(state, action: PayloadAction<Scene>) {
      state.metadata = action.payload.metadata;
    },
    createNewSceneFailure(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
  },
});

export const {
  createNewSceneRequest,
  createNewSceneSuccess,
  createNewSceneFailure,
} = sceneSlice.actions;
export default sceneSlice.reducer;
