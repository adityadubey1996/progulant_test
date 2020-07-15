import FileMapping from "./file_mapping";

import ClickedEvent from "./ClickedEvent";

import { combineReducers } from "redux";
export const allReducers = combineReducers({
  fileMapping: FileMapping,
  clickedEvent: ClickedEvent,
});

export default allReducers;
