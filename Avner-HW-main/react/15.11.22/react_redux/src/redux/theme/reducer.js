import { THEME_ACTIONS_TYPES } from "./actions.types";


const INITIAL_STATE = {
   mode: "white"
}

export function themeReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case THEME_ACTIONS_TYPES.TOGGLE_THEME:

         const mode = state.mode === "white" ? "black" : "white"

         document.body.style.backgroundColor = mode

         return {
            mode: mode
         }
      default:
         return state
   }
}