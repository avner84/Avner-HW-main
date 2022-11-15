import { USER_ACTIONS_TYPES } from "./actions.type";

const INITIAL_STATE = {
   user: {},
   error: ""
}


export function userReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      // case USER_ACTIONS_TYPES.ADD_USER:
      //    return {
      //       user: [action.payload, ...state.user],
      //       error: ""
      //    }
      case USER_ACTIONS_TYPES.GET_USER:
         return {
            user: action.payload,
            error: ""
         }
      case USER_ACTIONS_TYPES.GET_USER_FAIL:
         return {
            user: [],
            error: action.payload
         }
      default:
         return state
   }
}