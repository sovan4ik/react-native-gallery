import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import homeScreen from './components/homeScreen/homeScreen';
import singlePhotoScreen from './components/singlePhotoScreen/singlePhotoScreen';

const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

export default class App extends React.Component {

  render() {
      return (
        <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="homeScreen">
                <Stack.Screen name="homeScreen" component={homeScreen} />
                <Stack.Screen name="singlePhoto" component={singlePhotoScreen} />
              </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
  }
};