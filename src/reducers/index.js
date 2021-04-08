import { combineReducers } from 'redux';
import { ADD_FAVOURITE, REMOVE_FAVOURITE, GET_DATA, SET_CITY } from '../actionCreators/types';

const getData = (state = [] , action) => {
    switch(action.type) {
        case GET_DATA:
            return action.payload
        default:
            return state
    }
};

const favourites = (state = [], action) => {
    switch(action.type){
        case ADD_FAVOURITE:
            return [...state, action.payload]
        case REMOVE_FAVOURITE:
            return state.filter(i => i.ifsc !== action.payload)
        default:
            return state
    }
}

const city = (state='', action) => {
    switch(action.type){
        case SET_CITY:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    banks: getData,
    favourites: favourites,
    city: city
});