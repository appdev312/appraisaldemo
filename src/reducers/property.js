import {
  REQUEST,
  SUCCESS,
  FAILED,

  PROPERTY_SEARCH,
  SINGLE_PROPERTY,
} from '../constants';

const initialState = {
  propertySearch: {
    results: [],
    loading: false,
    error: null,
  },
  singleProperty: {
    results: [],
    loading: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_SEARCH + REQUEST:
      return {
        ...state,
        propertySearch: {
          results: [],
          loading: true,
          error: null,
        },        
      };

    case PROPERTY_SEARCH + SUCCESS:
      return {
        ...state,
        propertySearch: {
          ...state.propertySearch,
          results: action.payload.results,
          loading: false,
        },
      };

    case PROPERTY_SEARCH + FAILED:
      return {
        ...state,
        propertySearch: {
          ...state.propertySearch,
          error: action.payload,
          loading: false,
        },
      };

    case SINGLE_PROPERTY + REQUEST:
      return {
        ...state,
        singleProperty: {
          results: [],
          loading: true,
          error: null,
        },        
      };

    case SINGLE_PROPERTY + SUCCESS:
      return {
        ...state,
        singleProperty: {
          ...state.singleProperty,
          results: action.payload.results,
          loading: false,
        },
      };

    case SINGLE_PROPERTY + FAILED:
      return {
        ...state,
        singleProperty: {
          ...state.singleProperty,
          error: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
}
