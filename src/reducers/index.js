import { SET_ITEM_DETAILS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_ITEM_DETAILS:
      return { data: action.payload };
    default:
      return state;
  }
}