import axios from 'axios';
import {Alert} from 'react-native';
import { SET_DATA_STATE, SET_CURRENT_PHOTO } from '../constants/actionTypes';
export function setData(data) {
  return {
    type: SET_DATA_STATE,
    payload: data
  }
}

export function getData() {
  return dispatch => {
    axios
      .get('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
      .then(response => {
        dispatch(setData(response.data));
      })
      .catch(error => {
        Alert.alert('Error', 'Error no data', error);
      });
  };
}

export function setCurrentPhoto(url) {
    return {
      type: SET_CURRENT_PHOTO,
      payload: url
    }
  }