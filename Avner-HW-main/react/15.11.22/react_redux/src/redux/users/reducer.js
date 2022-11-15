import { USERS_ACTIONS_TYPES } from "./actions.type";

const INITIAL_STATE = {
   users: [],
   error: ""
}


export function usersReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      // case USERS_ACTIONS_TYPES.ADD_USER:
      //    return {
      //       users: [action.payload, ...state.users],
      //       error: ""
      //    }
      case USERS_ACTIONS_TYPES.GET_USERS:
         return {
            users: action.payload,
            error: ""
         }
      case USERS_ACTIONS_TYPES.GET_USERS_FAIL:
         return {
            users: [],
            error: action.payload
         }
      default:
         return state
   }
}