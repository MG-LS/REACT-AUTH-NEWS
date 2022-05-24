import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { application } from "./features/application";
import { news } from "./features/News";
import { composeWithDevTools } from "redux-devtools-extension";
import { commState } from "./features/Comt.";

export const store = createStore(
  combineReducers({
    application,
    news,
    commState,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
