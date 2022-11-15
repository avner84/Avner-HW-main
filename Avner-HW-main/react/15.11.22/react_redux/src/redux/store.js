import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import { counterReducer } from "./counter/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { themeReducer } from "./theme/reducer";
import thunk from 'redux-thunk';
import { usersReducer } from "./users/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   theme: themeReducer,
   users: usersReducer,
   user: userReducer
})

const middleWares = [logger, thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)))
