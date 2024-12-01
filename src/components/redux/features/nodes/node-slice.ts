import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flow3DNodes } from "../../../models/node";

const initialState: Flow3DNodes[] = [];

const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNewNodeToSceneRequest() {
      console.debug("Request received to add new node");
    },
    addNewNodeToSceneSuccess(state, action: PayloadAction<Flow3DNodes>) {
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
      action: PayloadAction<{ guuid: string; update: Partial<Flow3DNodes> }>
    ) {
        const node = state.find((node) => node.guuid === action.payload.guuid);
        if (node) {
          Object.assign(node, action.payload.update);
        }
    },
    updateNodePropertiesFailure() {
      console.error("Updating node properties failed!");
    },
    deleteNodeRequest() {

    }, 
    deleteNodeSuccess(state, action: PayloadAction<{guuid: string}>) {
      const idx = state.findIndex(node => node.guuid === action.payload.guuid);
      if(idx !== -1) {
        state.splice(idx, 1)
      }
    },
    deleteNodeFailure() {

    }
  },
});

export const {
  addNewNodeToSceneRequest,
  addNewNodeToSceneSuccess,
  addNewNodeToSceneFailure,
  updateNodePropertiesRequest,
  updateNodePropertiesSuccess,
  updateNodePropertiesFailure,
  deleteNodeRequest,
  deleteNodeSuccess,
  deleteNodeFailure
} = nodesSlice.actions;
export default nodesSlice.reducer;
