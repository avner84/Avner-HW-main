import { THEME_ACTIONS_TYPES } from "./actions.types";


export function toggleThemeAction() {
   return {
      type: THEME_ACTIONS_TYPES.TOGGLE_THEME,
   }
}