import { UPDATE_FILTER } from "./actions";

const initialState = {
  filters: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, filters: action.payload }
    default:
      return state;
  }

}
