import { SET_DATA_STATE, SET_CURRENT_PHOTO } from '../constants/actionTypes';

const initialState = {
  DATA: [],
  currentPhoto: null
};

export default function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA_STATE:
            return {
              ...state, DATA: action.payload
            }
        case SET_CURRENT_PHOTO:
            return {
            ...state, currentPhoto: action.payload
            }
        default:
            return state
    }
}