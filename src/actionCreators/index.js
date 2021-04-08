import api from '../api';
import { ADD_FAVOURITE, REMOVE_FAVOURITE, GET_DATA, SET_CITY } from './types';

export const fetchData = (city) => async dispatch => {
    const response = await api.get(`/banks?city=${city}`);

    dispatch({ type: GET_DATA, payload: response.data});
}

export const addFavourite = (data) => {
    return {
        type: ADD_FAVOURITE,
        payload: data
    }
}

export const removeFavourite = (ifsc) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: ifsc
    }
}

export const setCityState = (city) => {
    return {
        type: SET_CITY,
        payload : city
    }
}