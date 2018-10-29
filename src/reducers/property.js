import {
  REQUEST,
  SUCCESS,
  FAILED,

  PROPERTY_SEARCH,
  SINGLE_PROPERTY,
} from '../constants';

const initialState = {
  properties: {
    results: [],
  },
  property: {},
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_SEARCH + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,        
      };

    case PROPERTY_SEARCH + SUCCESS:
      return {
        ...state,
        properties: action.payload,
        loading: false,
      };

    case PROPERTY_SEARCH + FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SINGLE_PROPERTY + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,        
      };

    case SINGLE_PROPERTY + SUCCESS:
      return {
        ...state,
        property: action.payload,
        loading: false,
      };

    case SINGLE_PROPERTY + FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
