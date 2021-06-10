import { UPDATE_SORT } from '../type';

const initialState = {
  type: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
