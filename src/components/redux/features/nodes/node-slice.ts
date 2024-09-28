import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flow3DNode } from "../../../models/node";
import { update } from "three/examples/jsm/libs/tween.module.js";
import { act } from "react";

const initialState: Flow3DNode[] = [];

const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNewNodeToSceneRequest() {
      console.debug("Request received to add new node");
    },
    addNewNodeToSceneSuccess(state, action: PayloadAction<Flow3DNode>) {
      state.push(action.payload);
    },
    addNewNodeToSceneFailure() {
      console.debug("Adding node to scene failed!");
    },
    updateNodePropertiesRequest() {
      console.debug("Updating node properties request received");
    },
    updateNodePropertiesSuccess(
      state,
      action: PayloadAction<{ guuid: string; update: Partial<Flow3DNode> }>
    ) {
        const node = state.find((node) => node.guuid === action.payload.guuid);
        if (node) {
          Object.assign(node, action.payload.update);
        }
    },
    updateNodePropertiesFailure() {
      console.error("Updating node properties failed!");
    },
  },
});

export const {
  addNewNodeToSceneRequest,
  addNewNodeToSceneSuccess,
  addNewNodeToSceneFailure,
  updateNodePropertiesRequest,
  updateNodePropertiesSuccess,
  updateNodePropertiesFailure,
} = nodesSlice.actions;
export default nodesSlice.reducer;
