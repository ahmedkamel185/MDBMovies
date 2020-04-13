import React, { Component } from "react";
import Home from "./App/Containers/Home";
import Details from "./App/Containers/Details";
import initialState from "./App/src/config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieStore from "./App/Models/MovieList";
import FavouriteStore from "./App/Models/FavouriteList";
const Stack = createStackNavigator();
import { Provider } from "mobx-react";

const movieStore = (window.MovieStore = MovieStore.create(initialState));

const favouriteStore = (window.FavouriteStore = FavouriteStore.create(initialState));

const screens = {
  Screen1: {
    screen: Home
  },
  Screen2: {
    screen: Details
  }
};

const config = {
  headerMode: "none",
  initialRouteName: "Screen1"
};

const Stack2 = createStackNavigator();

export default stack => (
  <Provider MovieStore={movieStore.fetchData()} FavouriteStore={favouriteStore.fetchData()}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} navigation={stack} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
