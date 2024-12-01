import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flow3DEdges } from "../../../models/edge";

const initialState: Flow3DEdges[] = [];

const edgesSlice = createSlice({
  name: "edges",
  initialState,
  reducers: {
    addNewEdgeToSceneRequest() {
      console.debug("Request received to add new node");
    },
    addNewEdgeToSceneSuccess(state, action: PayloadAction<Flow3DEdges>) {
      state.push(action.payload);
    },
    addNewEdgeToSceneFailure() {
      console.debug("Adding edge to scene failed!");
    },
    updateEdgePropertiesRequest() {
      console.debug("Updating edge properties request received");
    },
    updateEdgePropertiesSuccess(
      state,
      action: PayloadAction<{ guuid: string; update: Partial<Flow3DEdges> }>
    ) {
      const edge = state.find((edge) => edge.guuid === action.payload.guuid);
      if (edge) {
        Object.assign(edge, action.payload.update);
      }
    },
    updateEdgePropertiesFailure() {
      console.error("Updating edge properties failed!");
    },
  },
});

export const {
  addNewEdgeToSceneRequest,
  addNewEdgeToSceneSuccess,
  addNewEdgeToSceneFailure,
  updateEdgePropertiesRequest,
  updateEdgePropertiesSuccess,
  updateEdgePropertiesFailure,
} = edgesSlice.actions;
export default edgesSlice.reducer;
