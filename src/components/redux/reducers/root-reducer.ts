import { combineReducers } from "redux";
import sceneReducer from "../features/scene/scene-slice"
import nodesReducer from "../features/nodes/node-slice"

const rootReducer = combineReducers({
    scene: sceneReducer,
    nodes: nodesReducer
});

export default rootReducer;
