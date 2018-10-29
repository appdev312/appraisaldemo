import axios from 'axios';
import {
  BASE_ENDPOINT,

  REQUEST,
  SUCCESS,
  FAILED,

  PROPERTY_SEARCH,
  SINGLE_PROPERTY,
} from '../constants';

const propertySearchRequest = () => ({
  type: PROPERTY_SEARCH + REQUEST,
});

const propertySearchSuccess = (payload) => ({
  type: PROPERTY_SEARCH + SUCCESS,
  payload,
});

const propertySearchFailed = (error) => ({
  type: PROPERTY_SEARCH + FAILED,
  payload: error,
});

const propertySearch = () => async dispatch => {
  try {
    dispatch(propertySearchRequest());
    const { data } = await axios.get(`${BASE_ENDPOINT}/search`);
    dispatch(propertySearchSuccess(data));
  } catch (err) {
    dispatch(propertySearchFailed(err.response.data));
  }
};

const singlePropertyRequest = (propID) => ({
  type: SINGLE_PROPERTY + REQUEST,
  payload: propID,
});

const singlePropertySuccess = (payload) => ({
  type: SINGLE_PROPERTY + SUCCESS,
  payload,
});

const singlePropertyFailed = (error) => ({
  type: SINGLE_PROPERTY + FAILED,
  payload: error,
});

const singleProperty = (propID) => async dispatch => {
  try {
    dispatch(singlePropertyRequest(propID));
    const { data } = await axios.get(`${BASE_ENDPOINT}/${propID}`);
    dispatch(singlePropertySuccess(data));
  } catch (err) {
    dispatch(singlePropertyFailed(err.response.data));
  }
};

export {
  propertySearch,
  singleProperty,
};
