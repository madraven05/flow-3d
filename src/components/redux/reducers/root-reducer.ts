import { combineReducers } from "redux";
import sceneReducer from "../features/scene/scene-slice"
import nodesReducer from "../features/nodes/node-slice"
import edgesReducer from "../features/edges/edge-slice"


const rootReducer = combineReducers({
    scene: sceneReducer,
    nodes: nodesReducer,
    edges: edgesReducer
});

export default rootReducer;
