import { combineReducers } from "redux";
import sceneReducer from "../features/scene/scene-slice"

const rootReducer = combineReducers({
    scene: sceneReducer
});

export default rootReducer;
