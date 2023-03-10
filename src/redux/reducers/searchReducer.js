import { GET_SEARCH_RESULT } from "../actions";

const initialState = {
  searchList: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        searchList: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
